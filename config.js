var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
    {
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Irving, TX",
				locationID: "4700168",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "48a4910bc8cca08db9c7e4cbd998ab19"
			}
		},
		//{
    			//module: "MMM-EasyPix",
			//position: "bottom_left",
			//config: {
			//picName: "nokia.jpg", // Enter the picture file name.
			//maxWidth: "20%",        // Size picture precisely. Retains aspect ratio.
			//sounds: ["1.mp3", "me2.mp3"]  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
			//}
		//},
		{
                            module: 'MMM-MyCommute',
                            position: 'top_right',
                            header: 'Traffic',
                            classes: 'default everyone', 
                            config: {
                                          apikey: 'AIzaSyDTYrZ2yYPux8Fuq8d6nJN5B1_UQQ58x9o',
                                                        origin: '6000 Connection Dr,Irving, TX 75039',
                                                        startTime: "00:00",
                                                        endTime: "23:59",
                                                        destinations: [
								  {
                                                                    destination: '2400 Aviation Dr, DFW Airport, TX 75261',
                                                                    label: 'DFW Airport',
								    color: '#82E5AA',
                                                                  },
                                                                  {
                                                                    destination: '255 Parkway Blvd, Coppell, TX 75019',
                                                                    label: 'Coppell',
                                                                    color: '#00FFFF',
                                                                 },
                                                                  {
                                                                    destination: '1520 K Ave # 300, Plano, TX 75074',
                                                                    label: 'Plano',
								    color: '#FE6556',
                                                                  },
                                                                  {
                                                                    destination: '6101 Frisco Square Blvd, Frisco, TX 75034',
                                                                    label: 'Frisco',
								     color: '#F8FA84',
                                                                  },
								  {
                                                                    destination: '200 S Main St, Grapevine, TX 76051',
                                                                    label: 'Grapevine',
                                                                    color: '#DB74C8',
                                                                 },
                                                                   ]
                                  }
		},
		
		{
		  module: "MMM-MyScoreboard",
		  position: "bottom_right",
		  classes: "default everyone",
		  header: "My Scoreboard",
		  config: {
		    showLeagueSeparators: true,
		    colored: true,
		    viewStyle: "mediumLogos",
		    sports: [
		      {
		        league: "NHL",
		        groups: ["Atlantic"]
		      },
		      {
		        league: "NBA",
		        teams: ["TOR", "DAL", "LAL"],
		        groups: ["Pacific", "Central"]
		      },
		      {
		        league: "MLB",
		        teams: ["TOR", "CHW", "NYY", "TEX"]
		      },
		      {
		        league: "NFL",
		        teams: ["WAS", "NYJ", "NYG", "DAL"]
		      },
		      {
		        league: "MLS",
		        teams: ["DAL", "LA", "NYC"]
		      },
		      {
		        league: "NCAAM_MM",
		        label: "March Madness"
		      }
		    ]
		}
		
		  },
		{
		module: 'MMM-ImageSlideshow',
		position: 'top_center',
		config: {
			imagePaths: ['modules/MMM-ImageSlideshow/nokia'],
			fixedImageWidth: '140',
			fixedImageHeight: '100'
		}
		},
		{
   		module: 'youtube',
   		position: 'middle_center', //used to be lower_third, keep it as module 5
   		config: {
   		id: "lFMOfNRzyAc,lFMOfNRzyAc",
   		}
   	},
	{
		module: 'MMM-YouTube-API',
		position: 'bottom_left',
                config: {
                    videoID: 'Ga3maNZ0x0w',
		    width: '320',
	            height: '180'		
                }
    }

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
