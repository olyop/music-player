// Start of script
var console, $;

// Global API Variables
var menu,
		albumClick,
		artistClick,
		musicPlay;

// Data Variables
var siteInfo,
		albumsObj,
		artistsObj,
		songsObj,
		membersObj;

// Ajax Functions
function getSiteInfo() {
	return $.ajax({
		url: 'scripts/json/site-info.json',
		cache: false,
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			console.log(err.Message);
		},
		success: function (data) {
			siteInfo = data;
		}
	});
}
function getAlbums() {
  return $.ajax({
    url: 'scripts/json/albums.json',
		cache: false,
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			console.log(err.Message);
		},
    success: function (data) {
      albumsObj = data.albums;
    }
  });
}
function getArtists() {
	return $.ajax({
		url: './scripts/json/artists.json',
		cache: false,
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			console.log(err.Message);
		},
		success: function (data) {
			artistsObj = data.artists;
		}
	});
}
function getSongs() {
	return $.ajax({
		url: 'scripts/json/songs.json',
		cache: false,
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			console.log(err.Message);
		},
		success: function (data) {
			songsObj = data.songs;
		}
	});
}
function getMembers() {
	return $.ajax({
		url: 'scripts/json/members.json',
		cache: false,
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			console.log(err.Message);
		},
		success: function (data) {
			membersObj = data.members;
		}
	});
}

// Global Functions
var randNum,
		isEven,
		changePageTitle,
		shuffle,
		searchForId;

// Global React Render Functions
var renderGreetingApp,
		renderWeatherApp,
		renderAlbumGrid,
		renderSongsApp,
		renderArtistGrid,
		renderArtistInfo,
		renderTracksList,
		renderAboutPage,
		renderTracksQueue;