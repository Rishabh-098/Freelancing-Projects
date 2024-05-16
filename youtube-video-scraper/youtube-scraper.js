function getChannelId(customUrl, apiKey) {
    var url = 'https://www.googleapis.com/youtube/v3/search?type=channel&part=snippet&q=' + encodeURIComponent(customUrl) + '&key=' + apiKey;
    var response = UrlFetchApp.fetch(url);
    var json = JSON.parse(response.getContentText());
    if (json.items.length > 0) {
      return json.items[0].snippet.channelId;
    } else {
      return null;
    }
  }
  
  function parseDuration(duration) {
    return duration.replace('PT', '')
                   .replace('H', ' hour ')
                   .replace('M', ' minutes ')
                   .replace('S', ' seconds ')
                   .trim();
  }
  
  function getChannelVideos(apiKey, channelId, startDate, endDate) {
    var videos = [];
    var uploadsUrl = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=' + channelId + '&key=' + apiKey;
    var uploadsResponse = UrlFetchApp.fetch(uploadsUrl);
    var uploadsJson = JSON.parse(uploadsResponse.getContentText());
    var uploadsPlaylistId = uploadsJson.items[0].contentDetails.relatedPlaylists.uploads;
    
    var nextPageToken = '';
    do {
      var playlistItemsUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + uploadsPlaylistId + '&maxResults=50&pageToken=' + nextPageToken + '&key=' + apiKey;
      var playlistItemsResponse = UrlFetchApp.fetch(playlistItemsUrl);
      var playlistItemsJson = JSON.parse(playlistItemsResponse.getContentText());
      playlistItemsJson.items.forEach(function(item) {
        var videoPublishedDate = new Date(item.snippet.publishedAt);
        var start = new Date(startDate);
        var end = new Date(endDate);
        if (videoPublishedDate >= start && videoPublishedDate <= end) {
          var videoDetailsUrl = 'https://www.googleapis.com/youtube/v3/videos?id=' + item.snippet.resourceId.videoId + '&part=contentDetails&key=' + apiKey;
          var videoDetailsResponse = UrlFetchApp.fetch(videoDetailsUrl);
          var videoDetailsJson = JSON.parse(videoDetailsResponse.getContentText());
          var duration = parseDuration(videoDetailsJson.items[0].contentDetails.duration); // Formatted duration
          
          var video = {
            videoUrl: 'https://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            duration: duration
          };
          videos.push(video);
        }
      });
      nextPageToken = playlistItemsJson.nextPageToken || '';
    } while (nextPageToken !== '');
    
    return videos;
  }
  
  function main() {
    var apiKey = 'Your API Key';
    var customUrl = 'Youtube Channel Name';
    var executionDate = new Date(); // Gets today's date
  
    // Calculate yesterday's date
    var yesterday = new Date(executionDate);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // Format dates to ISO string (yyyy-mm-dd)
    //var startDate = yesterday.toISOString().slice(0, 10); // Start of yesterday
    //var endDate = executionDate.toISOString().slice(0, 10); // End of yesterday, set to today's date for completeness
    var startDate = new Date('2024-04-21T00:00:00Z'); // Start of 21st April 2024
    var endDate = new Date('2024-04-21T23:59:59Z'); // End of 21st April 2024
  
    var sheetName = 'Shorts'; // Specify the name of the sheet/tab to update
    var channelId = getChannelId(customUrl, apiKey);
  
    if (channelId) {
      var videos = getChannelVideos(apiKey, channelId, startDate, endDate);
      // Additional filter before writing to sheet
      videos = videos.filter(function(video) {
        var videoDate = new Date(video.publishedAt).toISOString().slice(0, 10);
        return videoDate === startDate;
      });
  
      var spreadsheetId = '1u_qDgpocVPNituC6lctBXQXxjtcFFqrOn-GdMkCGl-Q';
      var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      var sheet = spreadsheet.getSheetByName(sheetName); // Get the specific sheet by name
  
      if (!sheet) {
        // Create the sheet if it doesn't exist
        sheet = spreadsheet.insertSheet(sheetName);
        // Append headers starting from Column C
        sheet.getRange('C1').setValue('Video URL');
        sheet.getRange('D1').setValue('Title');
        sheet.getRange('E1').setValue('Published At');
        sheet.getRange('F1').setValue('Duration');
        sheet.getRange('G1').setValue('Execution Date');
      }
  
      // Determine the start row for new data (assuming row 1 has headers)
      var startRow = 4; // Assuming data starts from row 4
      var numNewRows = videos.length;
  
      if (numNewRows > 0) {
        // Insert new rows starting from the second row for new data
        sheet.insertRowsAfter(3, numNewRows);
  
        // Prepare data to insert starting from column C
        var values = videos.map(function(video) {
          return [
            video.videoUrl,
            video.title,
            video.publishedAt,
            video.duration,
            executionDate.toISOString().slice(0, 10)
          ];
        });
  
        // Set new data starting from row 4, column C
        sheet.getRange(startRow, 3, numNewRows, 5).setValues(values);
  
        // Set hyperlink formula in Column B and other formulas
        var dataValidation = sheet.getRange('I4').getDataValidation();
        for (let i = 0; i < numNewRows; i++) {
          let formulaCellA = sheet.getRange(startRow + i, 1);
          let formulaA = `=A${startRow + i + 1} + 1`;
          formulaCellA.setFormula(formulaA);
  
          let formulaCellB = sheet.getRange(startRow + i, 2);
          let formulaB = `=HYPERLINK("${values[i][0]}", "${values[i][1]}")`;
          formulaCellB.setFormula(formulaB);
  
          let validationCellI = sheet.getRange(startRow + i, 9);
          validationCellI.setDataValidation(dataValidation);
        }
      } else {
        Logger.log('No videos found for the specified date range.');
      }
    } else {
      Logger.log('Channel not found');
    }
  }
  