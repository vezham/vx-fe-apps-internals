const timezone = [
  {
    code: 'Pacific/Midway',
    name: '(GMT-11:00) Samoa Standard Time - Midway'
  },
  {
    code: 'Pacific/Niue',
    name: '(GMT-11:00) Niue Time - Alofi'
  },
  {
    code: 'Pacific/Pago_Pago',
    name: '(GMT-11:00) Samoa Standard Time - Pago Pago'
  },
  {
    code: 'Pacific/Samoa',
    name: '(GMT-11:00) Samoa Standard Time - Samoa'
  },
  {
    code: 'Pacific/Rarotonga',
    name: '(GMT-10:00) Cook Islands Standard Time - Avarua'
  },
  {
    code: 'Pacific/Honolulu',
    name: '(GMT-10:00) Hawaii-Aleutian Standard Time - Honolulu'
  },
  {
    code: 'Pacific/Johnston',
    name: '(GMT-10:00) Hawaii-Aleutian Standard Time'
  },
  {
    code: 'Pacific/Tahiti',
    name: '(GMT-10:00) Tahiti Time - Faaa'
  },
  {
    code: 'Pacific/Marquesas',
    name: '(GMT-09:30) Marquesas Time - Marquesas'
  },
  {
    code: 'Pacific/Gambier',
    name: '(GMT-09:00) Gambier Time - Gambier'
  },
  {
    code: 'America/Adak',
    name: '(GMT-09:00) Hawaii-Aleutian Daylight Time - Adak'
  },
  {
    code: 'America/Anchorage',
    name: '(GMT-08:00) Alaska Daylight Time - Anchorage'
  },
  {
    code: 'America/Juneau',
    name: '(GMT-08:00) Alaska Daylight Time - Juneau'
  },
  {
    code: 'America/Metlakatla',
    name: '(GMT-08:00) Alaska Daylight Time - Metlakatla'
  },
  {
    code: 'America/Nome',
    name: '(GMT-08:00) Alaska Daylight Time - Nome'
  },
  {
    code: 'America/Sitka',
    name: '(GMT-08:00) Alaska Daylight Time - Sitka'
  },
  {
    code: 'America/Yakutat',
    name: '(GMT-08:00) Alaska Daylight Time - Yakutat'
  },
  {
    code: 'Pacific/Pitcairn',
    name: '(GMT-08:00) Pitcairn Standard Time - Adamstown'
  },
  {
    code: 'America/Hermosillo',
    name: '(GMT-07:00) Mexican Pacific Standard Time - Hermosillo'
  },
  {
    code: 'America/Dawson_Creek',
    name: '(GMT-07:00) Mountain Standard Time - Dawson Creek'
  },
  {
    code: 'America/Fort_Nelson',
    name: '(GMT-07:00) Mountain Standard Time - Fort Nelson'
  },
  {
    code: 'America/Phoenix',
    name: '(GMT-07:00) Mountain Standard Time - Phoenix'
  },
  {
    code: 'America/Los_Angeles',
    name: '(GMT-07:00) Pacific Daylight Time - Los Angeles'
  },
  {
    code: 'America/Tijuana',
    name: '(GMT-07:00) Pacific Daylight Time - Tijuana'
  },
  {
    code: 'America/Vancouver',
    name: '(GMT-07:00) Pacific Daylight Time - Vancouver'
  },
  {
    code: 'America/Dawson',
    name: '(GMT-07:00) Yukon Time - Dawson'
  },
  {
    code: 'America/Whitehorse',
    name: '(GMT-07:00) Yukon Time - Whitehorse'
  },
  {
    code: 'America/Belize',
    name: '(GMT-06:00) Central Standard Time - Belize City'
  },
  {
    code: 'America/Costa_Rica',
    name: '(GMT-06:00) Central Standard Time - Costa Rica'
  },
  {
    code: 'America/El_Salvador',
    name: '(GMT-06:00) Central Standard Time - El Salvador'
  },
  {
    code: 'America/Guatemala',
    name: '(GMT-06:00) Central Standard Time - Guatemala City'
  },
  {
    code: 'America/Managua',
    name: '(GMT-06:00) Central Standard Time - Managua'
  },
  {
    code: 'America/Regina',
    name: '(GMT-06:00) Central Standard Time - Regina'
  },
  {
    code: 'America/Swift_Current',
    name: '(GMT-06:00) Central Standard Time - Swift Current'
  },
  {
    code: 'America/Tegucigalpa',
    name: '(GMT-06:00) Central Standard Time - Tegucigalpa'
  },
  {
    code: 'Pacific/Easter',
    name: '(GMT-06:00) Easter Island Time - Easter'
  },
  {
    code: 'Pacific/Galapagos',
    name: '(GMT-06:00) Galapagos Time - Galapagos'
  },
  {
    code: 'America/Chihuahua',
    name: '(GMT-06:00) Mexican Pacific Time - Chihuahua'
  },
  {
    code: 'America/Mazatlan',
    name: '(GMT-06:00) Mexican Pacific Time - Mazatlan'
  },
  {
    code: 'America/Boise',
    name: '(GMT-06:00) Mountain Standard Time - Boise'
  },
  {
    code: 'America/Cambridge_Bay',
    name: '(GMT-06:00) Mountain Standard Time - Cambridge Bay'
  },
  {
    code: 'America/Denver',
    name: '(GMT-06:00) Mountain Standard Time - Denver'
  },
  {
    code: 'America/Edmonton',
    name: '(GMT-06:00) Mountain Standard Time - Edmonton'
  },
  {
    code: 'America/Inuvik',
    name: '(GMT-06:00) Mountain Standard Time - Inuvik'
  },
  {
    code: 'America/Ojinaga',
    name: '(GMT-06:00) Mountain Standard Time - Ojinaga'
  },
  {
    code: 'America/Yellowknife',
    name: '(GMT-06:00) Mountain Standard Time - Yellowknife'
  },
  {
    code: 'America/Eirunepe',
    name: '(GMT-05:00) Acre Standard Time - Eirunepe'
  },
  {
    code: 'America/Rio_Branco',
    name: '(GMT-05:00) Acre Standard Time - Rio Branco'
  },
  {
    code: 'America/Bahia_Banderas',
    name: '(GMT-05:00) Central Time - Bahia Banderas'
  },
  {
    code: 'America/North_Dakota/Beulah',
    name: '(GMT-05:00) Central Time - Beulah, North Dakota'
  },
  {
    code: 'America/North_Dakota/Center',
    name: '(GMT-05:00) Central Time - Center, North Dakota'
  },
  {
    code: 'America/Chicago',
    name: '(GMT-05:00) Central Time - Chicago'
  },
  {
    code: 'America/Indiana/Knox',
    name: '(GMT-05:00) Central Time - Knox, Indiana'
  },
  {
    code: 'America/Matamoros',
    name: '(GMT-05:00) Central Time - Matamoros'
  },
  {
    code: 'America/Menominee',
    name: '(GMT-05:00) Central Time - Menominee'
  },
  {
    code: 'America/Merida',
    name: '(GMT-05:00) Central Time - Merida'
  },
  {
    code: 'America/Mexico_City',
    name: '(GMT-05:00) Central Time - Mexico City'
  },
  {
    code: 'America/Monterrey',
    name: '(GMT-05:00) Central Time - Monterrey'
  },
  {
    code: 'America/North_Dakota/New_Salem',
    name: '(GMT-05:00) Central Time - New Salem, North Dakota'
  },
  {
    code: 'America/Rainy_River',
    name: '(GMT-05:00) Central Time - Rainy River'
  },
  {
    code: 'America/Rankin_Inlet',
    name: '(GMT-05:00) Central Time - Rankin Inlet'
  },
  {
    code: 'America/Resolute',
    name: '(GMT-05:00) Central Time - Resolute'
  },
  {
    code: 'America/Indiana/Tell_City',
    name: '(GMT-05:00) Central Time - Tell City, Indiana'
  },
  {
    code: 'America/Winnipeg',
    name: '(GMT-05:00) Central Time - Winnipeg'
  },
  {
    code: 'America/Bogota',
    name: '(GMT-05:00) Colombia Standard Time - Bogota'
  },
  {
    code: 'America/Cancun',
    name: '(GMT-05:00) Eastern Standard Time - Cancun'
  },
  {
    code: 'America/Jamaica',
    name: '(GMT-05:00) Eastern Standard Time - Jamaica'
  },
  {
    code: 'America/Panama',
    name: '(GMT-05:00) Eastern Standard Time - Panama'
  },
  {
    code: 'America/Guayaquil',
    name: '(GMT-05:00) Ecuador Time - Guayaquil'
  },
  {
    code: 'America/Lima',
    name: '(GMT-05:00) Peru Standard Time - Lima'
  },
  {
    code: 'America/Boa_Vista',
    name: '(GMT-04:00) Amazon Standard Time - Boa Vista'
  },
  {
    code: 'America/Campo_Grande',
    name: '(GMT-04:00) Amazon Standard Time - Campo Grande'
  },
  {
    code: 'America/Cuiaba',
    name: '(GMT-04:00) Amazon Standard Time - Cuiaba'
  },
  {
    code: 'America/Manaus',
    name: '(GMT-04:00) Amazon Standard Time - Manaus'
  },
  {
    code: 'America/Porto_Velho',
    name: '(GMT-04:00) Amazon Standard Time - Porto Velho'
  },
  {
    code: 'America/Barbados',
    name: '(GMT-04:00) Atlantic Standard Time - Barbados'
  },
  {
    code: 'America/Martinique',
    name: '(GMT-04:00) Atlantic Standard Time - Martinique'
  },
  {
    code: 'America/Puerto_Rico',
    name: '(GMT-04:00) Atlantic Standard Time - Puerto Rico'
  },
  {
    code: 'America/Santo_Domingo',
    name: '(GMT-04:00) Atlantic Standard Time - Santo Domingo'
  },
  {
    code: 'America/La_Paz',
    name: '(GMT-04:00) Bolivia Time - Santa Cruz De La Sierra'
  },
  {
    code: 'America/Santiago',
    name: '(GMT-04:00) Chile Standard Time - Santiago'
  },
  {
    code: 'America/Havana',
    name: '(GMT-04:00) Cuba Time - Havana'
  },
  {
    code: 'America/Detroit',
    name: '(GMT-04:00) Eastern Time - Detroit'
  },
  {
    code: 'America/Grand_Turk',
    name: '(GMT-04:00) Eastern Time - Grand Turk'
  },
  {
    code: 'America/Indiana/Indianapolis',
    name: '(GMT-04:00) Eastern Time - Indianapolis'
  },
  {
    code: 'America/Iqaluit',
    name: '(GMT-04:00) Eastern Time - Iqaluit'
  },
  {
    code: 'America/Kentucky/Louisville',
    name: '(GMT-04:00) Eastern Time - Louisville'
  },
  {
    code: 'America/Indiana/Marengo',
    name: '(GMT-04:00) Eastern Time - Marengo, Indiana'
  },
  {
    code: 'America/Kentucky/Monticello',
    name: '(GMT-04:00) Eastern Time - Monticello, Kentucky'
  },
  {
    code: 'America/New_York',
    name: '(GMT-04:00) Eastern Time - New York City'
  },
  {
    code: 'America/Nipigon',
    name: '(GMT-04:00) Eastern Time - Nipigon'
  },
  {
    code: 'America/Pangnirtung',
    name: '(GMT-04:00) Eastern Time - Pangnirtung'
  },
  {
    code: 'America/Indiana/Petersburg',
    name: '(GMT-04:00) Eastern Time - Petersburg, Indiana'
  },
  {
    code: 'America/Port-au-Prince',
    name: '(GMT-04:00) Eastern Time - Port Au Prince'
  },
  {
    code: 'America/Thunder_Bay',
    name: '(GMT-04:00) Eastern Time - Thunder Bay'
  },
  {
    code: 'America/Toronto',
    name: '(GMT-04:00) Eastern Time - Toronto'
  },
  {
    code: 'America/Indiana/Vevay',
    name: '(GMT-04:00) Eastern Time - Vevay, Indiana'
  },
  {
    code: 'America/Indiana/Vincennes',
    name: '(GMT-04:00) Eastern Time - Vincennes, Indiana'
  },
  {
    code: 'America/Indiana/Winamac',
    name: '(GMT-04:00) Eastern Time - Winamac, Indiana'
  },
  {
    code: 'America/Guyana',
    name: '(GMT-04:00) Guyana Time'
  },
  {
    code: 'America/Asuncion',
    name: '(GMT-04:00) Paraguay Time - Asuncion'
  },
  {
    code: 'America/Caracas',
    name: '(GMT-04:00) Venezuela Time - Caracas'
  },
  {
    code: 'America/Argentina/Buenos_Aires',
    name: '(GMT-03:00) Argentina Standard Time - Buenos Aires'
  },
  {
    code: 'America/Argentina/Catamarca',
    name: '(GMT-03:00) Argentina Standard Time - Catamarca'
  },
  {
    code: 'America/Argentina/Cordoba',
    name: '(GMT-03:00) Argentina Standard Time - Cordoba'
  },
  {
    code: 'America/Argentina/Jujuy',
    name: '(GMT-03:00) Argentina Standard Time - Jujuy'
  },
  {
    code: 'America/Argentina/La_Rioja',
    name: '(GMT-03:00) Argentina Standard Time - La Rioja'
  },
  {
    code: 'America/Argentina/Mendoza',
    name: '(GMT-03:00) Argentina Standard Time - Mendoza'
  },
  {
    code: 'America/Argentina/Rio_Gallegos',
    name: '(GMT-03:00) Argentina Standard Time - Rio Gallegos'
  },
  {
    code: 'America/Argentina/Salta',
    name: '(GMT-03:00) Argentina Standard Time - Salta'
  },
  {
    code: 'America/Argentina/San_Juan',
    name: '(GMT-03:00) Argentina Standard Time - San Juan'
  },
  {
    code: 'America/Argentina/San_Luis',
    name: '(GMT-03:00) Argentina Standard Time - San Luis'
  },
  {
    code: 'America/Argentina/Tucuman',
    name: '(GMT-03:00) Argentina Standard Time - Tucuman'
  },
  {
    code: 'America/Argentina/Ushuaia',
    name: '(GMT-03:00) Argentina Standard Time - Ushuaia'
  },
  {
    code: 'Atlantic/Bermuda',
    name: '(GMT-03:00) Atlantic Time - Bermuda'
  },
  {
    code: 'America/Glace_Bay',
    name: '(GMT-03:00) Atlantic Time - Glace Bay'
  },
  {
    code: 'America/Goose_Bay',
    name: '(GMT-03:00) Atlantic Time - Goose Bay'
  },
  {
    code: 'America/Halifax',
    name: '(GMT-03:00) Atlantic Time - Halifax'
  },
  {
    code: 'America/Moncton',
    name: '(GMT-03:00) Atlantic Time - Moncton'
  },
  {
    code: 'America/Thule',
    name: '(GMT-03:00) Atlantic Time - Thule'
  },
  {
    code: 'America/Araguaina',
    name: '(GMT-03:00) Brasilia Standard Time - Araguaina'
  },
  {
    code: 'America/Bahia',
    name: '(GMT-03:00) Brasilia Standard Time - Bahia'
  },
  {
    code: 'America/Belem',
    name: '(GMT-03:00) Brasilia Standard Time - Belem'
  },
  {
    code: 'America/Fortaleza',
    name: '(GMT-03:00) Brasilia Standard Time - Fortaleza'
  },
  {
    code: 'America/Maceio',
    name: '(GMT-03:00) Brasilia Standard Time - Maceio'
  },
  {
    code: 'America/Recife',
    name: '(GMT-03:00) Brasilia Standard Time - Recife'
  },
  {
    code: 'America/Santarem',
    name: '(GMT-03:00) Brasilia Standard Time - Santarem'
  },
  {
    code: 'America/Sao_Paulo',
    name: '(GMT-03:00) Brasilia Standard Time - Sao Paulo'
  },
  {
    code: 'Atlantic/Stanley',
    name: '(GMT-03:00) Falkland Islands Standard Time - Stanley'
  },
  {
    code: 'America/Cayenne',
    name: '(GMT-03:00) French Guiana Time - Cayenne'
  },
  {
    code: 'Antarctica/Palmer',
    name: '(GMT-03:00) Palmer Time'
  },
  {
    code: 'America/Punta_Arenas',
    name: '(GMT-03:00) Punta Arenas Time'
  },
  {
    code: 'Antarctica/Rothera',
    name: '(GMT-03:00) Rothera Time'
  },
  {
    code: 'America/Paramaribo',
    name: '(GMT-03:00) Suriname Time - Paramaribo'
  },
  {
    code: 'America/Montevideo',
    name: '(GMT-03:00) Uruguay Standard Time - Montevideo'
  },
  {
    code: 'America/St_Johns',
    name: '(GMT-02:30) Newfoundland Time - St Johns'
  },
  {
    code: 'America/Noronha',
    name: '(GMT-02:00) Fernando de Noronha Standard Time - Noronha'
  },
  {
    code: 'Atlantic/South_Georgia',
    name: '(GMT-02:00) South Georgia Time'
  },
  {
    code: 'America/Miquelon',
    name: '(GMT-02:00) St. Pierre & Miquelon Time - Saint Pierre'
  },
  {
    code: 'America/Nuuk',
    name: '(GMT-02:00) West Greenland Time - Nuuk'
  },
  {
    code: 'Atlantic/Cape_Verde',
    name: '(GMT-01:00) Cape Verde Standard Time - Praia'
  },
  {
    code: 'Atlantic/Azores',
    name: '(GMT+00:00) Azores Time'
  },
  {
    code: 'UTC',
    name: '(GMT+00:00) Coordinated Universal Time'
  },
  {
    code: 'America/Scoresbysund',
    name: '(GMT+00:00) East Greenland Time - Scoresbysund'
  },
  {
    code: 'Etc/GMT',
    name: '(GMT+00:00) Greenwich Mean Time'
  },
  {
    code: 'Africa/Abidjan',
    name: '(GMT+00:00) Greenwich Mean Time - Abidjan'
  },
  {
    code: 'Africa/Bissau',
    name: '(GMT+00:00) Greenwich Mean Time - Bissau'
  },
  {
    code: 'America/Danmarkshavn',
    name: '(GMT+00:00) Greenwich Mean Time - Danmarkshavn'
  },
  {
    code: 'Africa/Monrovia',
    name: '(GMT+00:00) Greenwich Mean Time - Monrovia'
  },
  {
    code: 'Atlantic/Reykjavik',
    name: '(GMT+00:00) Greenwich Mean Time - Reykjavik'
  },
  {
    code: 'Africa/Sao_Tome',
    name: '(GMT+00:00) Greenwich Mean Time - São Tomé'
  },
  {
    code: 'Africa/Algiers',
    name: '(GMT+01:00) Central European Standard Time - Algiers'
  },
  {
    code: 'Africa/Tunis',
    name: '(GMT+01:00) Central European Standard Time - Tunis'
  },
  {
    code: 'Europe/Dublin',
    name: '(GMT+01:00) Ireland Standard Time - Dublin'
  },
  {
    code: 'Africa/Casablanca',
    name: '(GMT+01:00) Morocco Time'
  },
  {
    code: 'Europe/London',
    name: '(GMT+01:00) United Kingdom Time - London'
  },
  {
    code: 'Africa/Lagos',
    name: '(GMT+01:00) West Africa Standard Time - Lagos'
  },
  {
    code: 'Africa/Ndjamena',
    name: '(GMT+01:00) West Africa Standard Time - Ndjamena'
  },
  {
    code: 'Atlantic/Canary',
    name: '(GMT+01:00) Western European Time - Canary'
  },
  {
    code: 'Atlantic/Faroe',
    name: '(GMT+01:00) Western European Time - Faroe'
  },
  {
    code: 'Europe/Lisbon',
    name: '(GMT+01:00) Western European Time - Lisbon'
  },
  {
    code: 'Atlantic/Madeira',
    name: '(GMT+01:00) Western European Time - Madeira'
  },
  {
    code: 'Africa/El_Aaiun',
    name: '(GMT+01:00) Western Sahara Time'
  },
  {
    code: 'Africa/Juba',
    name: '(GMT+02:00) Central Africa Time - Juba'
  },
  {
    code: 'Africa/Khartoum',
    name: '(GMT+02:00) Central Africa Time - Khartoum'
  },
  {
    code: 'Africa/Maputo',
    name: '(GMT+02:00) Central Africa Time - Maputo'
  },
  {
    code: 'Africa/Windhoek',
    name: '(GMT+02:00) Central Africa Time - Windhoek'
  },
  {
    code: 'Europe/Amsterdam',
    name: '(GMT+02:00) Central European Time - Amsterdam'
  },
  {
    code: 'Europe/Andorra',
    name: '(GMT+02:00) Central European Time - Andorra La Vella'
  },
  {
    code: 'Europe/Belgrade',
    name: '(GMT+02:00) Central European Time - Belgrade'
  },
  {
    code: 'Europe/Berlin',
    name: '(GMT+02:00) Central European Time - Berlin'
  },
  {
    code: 'Europe/Brussels',
    name: '(GMT+02:00) Central European Time - Brussels'
  },
  {
    code: 'Europe/Budapest',
    name: '(GMT+02:00) Central European Time - Budapest'
  },
  {
    code: 'Africa/Ceuta',
    name: '(GMT+02:00) Central European Time - Ceuta'
  },
  {
    code: 'Europe/Copenhagen',
    name: '(GMT+02:00) Central European Time - Copenhagen'
  },
  {
    code: 'Europe/Gibraltar',
    name: '(GMT+02:00) Central European Time - Gibraltar'
  },
  {
    code: 'Europe/Luxembourg',
    name: '(GMT+02:00) Central European Time - Luxembourg'
  },
  {
    code: 'Europe/Madrid',
    name: '(GMT+02:00) Central European Time - Madrid'
  },
  {
    code: 'Europe/Malta',
    name: '(GMT+02:00) Central European Time - Malta'
  },
  {
    code: 'Europe/Monaco',
    name: '(GMT+02:00) Central European Time - Monaco'
  },
  {
    code: 'Europe/Oslo',
    name: '(GMT+02:00) Central European Time - Oslo'
  },
  {
    code: 'Europe/Paris',
    name: '(GMT+02:00) Central European Time - Paris'
  },
  {
    code: 'Europe/Prague',
    name: '(GMT+02:00) Central European Time - Prague'
  },
  {
    code: 'Europe/Rome',
    name: '(GMT+02:00) Central European Time - Rome'
  },
  {
    code: 'Europe/Stockholm',
    name: '(GMT+02:00) Central European Time - Stockholm'
  },
  {
    code: 'Europe/Tirane',
    name: '(GMT+02:00) Central European Time - Tirane'
  },
  {
    code: 'Europe/Vienna',
    name: '(GMT+02:00) Central European Time - Vienna'
  },
  {
    code: 'Europe/Warsaw',
    name: '(GMT+02:00) Central European Time - Warsaw'
  },
  {
    code: 'Europe/Zurich',
    name: '(GMT+02:00) Central European Time - Zurich'
  },
  {
    code: 'Africa/Cairo',
    name: '(GMT+02:00) Eastern European Standard Time - Cairo'
  },
  {
    code: 'Europe/Kaliningrad',
    name: '(GMT+02:00) Eastern European Standard Time - Kaliningrad'
  },
  {
    code: 'Africa/Tripoli',
    name: '(GMT+02:00) Eastern European Standard Time - Tripoli'
  },
  {
    code: 'Africa/Johannesburg',
    name: '(GMT+02:00) South Africa Standard Time'
  },
  {
    code: 'Antarctica/Troll',
    name: '(GMT+02:00) Troll Time'
  },
  {
    code: 'Asia/Baghdad',
    name: '(GMT+03:00) Arabian Standard Time - Baghdad'
  },
  {
    code: 'Asia/Qatar',
    name: '(GMT+03:00) Arabian Standard Time - Qatar'
  },
  {
    code: 'Asia/Riyadh',
    name: '(GMT+03:00) Arabian Standard Time - Riyadh'
  },
  {
    code: 'Africa/Nairobi',
    name: '(GMT+03:00) East Africa Time - Nairobi'
  },
  {
    code: 'Asia/Amman',
    name: '(GMT+03:00) Eastern European Time - Amman'
  },
  {
    code: 'Europe/Athens',
    name: '(GMT+03:00) Eastern European Time - Athens'
  },
  {
    code: 'Asia/Beirut',
    name: '(GMT+03:00) Eastern European Time - Beirut'
  },
  {
    code: 'Europe/Bucharest',
    name: '(GMT+03:00) Eastern European Time - Bucharest'
  },
  {
    code: 'Europe/Chisinau',
    name: '(GMT+03:00) Eastern European Time - Chisinau'
  },
  {
    code: 'Asia/Damascus',
    name: '(GMT+03:00) Eastern European Time - Damascus'
  },
  {
    code: 'Asia/Gaza',
    name: '(GMT+03:00) Eastern European Time - Gaza'
  },
  {
    code: 'Asia/Hebron',
    name: '(GMT+03:00) Eastern European Time - Hebron'
  },
  {
    code: 'Europe/Helsinki',
    name: '(GMT+03:00) Eastern European Time - Helsinki'
  },
  {
    code: 'Europe/Kiev',
    name: '(GMT+03:00) Eastern European Time - Kyiv'
  },
  {
    code: 'Asia/Nicosia',
    name: '(GMT+03:00) Eastern European Time - Nicosia'
  },
  {
    code: 'Europe/Riga',
    name: '(GMT+03:00) Eastern European Time - Riga'
  },
  {
    code: 'Europe/Sofia',
    name: '(GMT+03:00) Eastern European Time - Sofia'
  },
  {
    code: 'Europe/Tallinn',
    name: '(GMT+03:00) Eastern European Time - Tallinn'
  },
  {
    code: 'Europe/Uzhgorod',
    name: '(GMT+03:00) Eastern European Time - Uzhhorod'
  },
  {
    code: 'Europe/Vilnius',
    name: '(GMT+03:00) Eastern European Time - Vilnius'
  },
  {
    code: 'Europe/Zaporozhye',
    name: '(GMT+03:00) Eastern European Time - Zaporozhye'
  },
  {
    code: 'Asia/Famagusta',
    name: '(GMT+03:00) Famagusta Time'
  },
  {
    code: 'Asia/Jerusalem',
    name: '(GMT+03:00) Israel Daylight Time - Jerusalem'
  },
  {
    code: 'Europe/Kirov',
    name: '(GMT+03:00) Kirov Time'
  },
  {
    code: 'Europe/Minsk',
    name: '(GMT+03:00) Moscow Standard Time - Minsk'
  },
  {
    code: 'Europe/Moscow',
    name: '(GMT+03:00) Moscow Standard Time - Moscow'
  },
  {
    code: 'Europe/Simferopol',
    name: '(GMT+03:00) Moscow Standard Time - Simferopol'
  },
  {
    code: 'Europe/Istanbul',
    name: '(GMT+03:00) Turkey Time - Istanbul'
  },
  {
    code: 'Europe/Volgograd',
    name: '(GMT+03:00) Volgograd Standard Time'
  },
  {
    code: 'Asia/Yerevan',
    name: '(GMT+04:00) Armenia Standard Time - Yerevan'
  },
  {
    code: 'Europe/Astrakhan',
    name: '(GMT+04:00) Astrakhan Time'
  },
  {
    code: 'Asia/Baku',
    name: '(GMT+04:00) Azerbaijan Standard Time - Baku'
  },
  {
    code: 'Asia/Tbilisi',
    name: '(GMT+04:00) Georgia Standard Time - Tbilisi'
  },
  {
    code: 'Asia/Dubai',
    name: '(GMT+04:00) Gulf Standard Time - Dubai'
  },
  {
    code: 'Indian/Mauritius',
    name: '(GMT+04:00) Mauritius Standard Time - Port Louis'
  },
  {
    code: 'Indian/Reunion',
    name: '(GMT+04:00) Réunion Time - Saint Denis'
  },
  {
    code: 'Europe/Samara',
    name: '(GMT+04:00) Samara Standard Time - Samara'
  },
  {
    code: 'Europe/Saratov',
    name: '(GMT+04:00) Saratov Time'
  },
  {
    code: 'Indian/Mahe',
    name: '(GMT+04:00) Seychelles Time'
  },
  {
    code: 'Europe/Ulyanovsk',
    name: '(GMT+04:00) Ulyanovsk Time'
  },
  {
    code: 'Asia/Kabul',
    name: '(GMT+04:30) Afghanistan Time - Kabul'
  },
  {
    code: 'Asia/Tehran',
    name: '(GMT+04:30) Iran Time - Tehran'
  },
  {
    code: 'Indian/Kerguelen',
    name: '(GMT+05:00) French Southern & Antarctic Time - Port Aux Francais'
  },
  {
    code: 'Indian/Maldives',
    name: '(GMT+05:00) Maldives Time'
  },
  {
    code: 'Antarctica/Mawson',
    name: '(GMT+05:00) Mawson Time - Mawson'
  },
  {
    code: 'Asia/Karachi',
    name: '(GMT+05:00) Pakistan Standard Time - Karachi'
  },
  {
    code: 'Asia/Dushanbe',
    name: '(GMT+05:00) Tajikistan Time - Dushanbe'
  },
  {
    code: 'Asia/Ashgabat',
    name: '(GMT+05:00) Turkmenistan Standard Time - Ashgabat'
  },
  {
    code: 'Asia/Samarkand',
    name: '(GMT+05:00) Uzbekistan Standard Time - Samarkand'
  },
  {
    code: 'Asia/Tashkent',
    name: '(GMT+05:00) Uzbekistan Standard Time - Tashkent'
  },
  {
    code: 'Asia/Aqtau',
    name: '(GMT+05:00) West Kazakhstan Time - Aqtau'
  },
  {
    code: 'Asia/Aqtobe',
    name: '(GMT+05:00) West Kazakhstan Time - Aqtobe'
  },
  {
    code: 'Asia/Atyrau',
    name: '(GMT+05:00) West Kazakhstan Time - Atyrau'
  },
  {
    code: 'Asia/Oral',
    name: '(GMT+05:00) West Kazakhstan Time - Oral'
  },
  {
    code: 'Asia/Qyzylorda',
    name: '(GMT+05:00) West Kazakhstan Time - Qyzylorda'
  },
  {
    code: 'Asia/Yekaterinburg',
    name: '(GMT+05:00) Yekaterinburg Standard Time - Yekaterinburg'
  },
  {
    code: 'Asia/Colombo',
    name: '(GMT+05:30) India Standard Time - Colombo'
  },
  {
    code: 'Asia/Kolkata',
    name: '(GMT+05:30) India Standard Time - Kolkata'
  },
  {
    code: 'Asia/Kathmandu',
    name: '(GMT+05:45) Nepal Time - Kathmandu'
  },
  {
    code: 'Asia/Dhaka',
    name: '(GMT+06:00) Bangladesh Standard Time - Dhaka'
  },
  {
    code: 'Asia/Thimphu',
    name: '(GMT+06:00) Bhutan Time - Thimphu'
  },
  {
    code: 'Asia/Almaty',
    name: '(GMT+06:00) East Kazakhstan Time - Almaty'
  },
  {
    code: 'Asia/Qostanay',
    name: '(GMT+06:00) East Kazakhstan Time - Kostanay'
  },
  {
    code: 'Indian/Chagos',
    name: '(GMT+06:00) Indian Ocean Time - Chagos'
  },
  {
    code: 'Asia/Bishkek',
    name: '(GMT+06:00) Kyrgyzstan Time - Bishkek'
  },
  {
    code: 'Asia/Omsk',
    name: '(GMT+06:00) Omsk Standard Time - Omsk'
  },
  {
    code: 'Asia/Urumqi',
    name: '(GMT+06:00) Urumqi Time'
  },
  {
    code: 'Antarctica/Vostok',
    name: '(GMT+06:00) Vostok Time - Vostok'
  },
  {
    code: 'Indian/Cocos',
    name: '(GMT+06:30) Cocos Islands Time - West Island'
  },
  {
    code: 'Asia/Yangon',
    name: '(GMT+06:30) Myanmar Time - Yangon'
  },
  {
    code: 'Asia/Barnaul',
    name: '(GMT+07:00) Barnaul Time'
  },
  {
    code: 'Indian/Christmas',
    name: '(GMT+07:00) Christmas Island Time - Flying Fish Cove'
  },
  {
    code: 'Antarctica/Davis',
    name: '(GMT+07:00) Davis Time - Davis'
  },
  {
    code: 'Asia/Hovd',
    name: '(GMT+07:00) Hovd Standard Time - Khovd'
  },
  {
    code: 'Asia/Bangkok',
    name: '(GMT+07:00) Indochina Time - Bangkok'
  },
  {
    code: 'Asia/Ho_Chi_Minh',
    name: '(GMT+07:00) Indochina Time - Ho Chi Minh City'
  },
  {
    code: 'Asia/Krasnoyarsk',
    name: '(GMT+07:00) Krasnoyarsk Standard Time - Krasnoyarsk'
  },
  {
    code: 'Asia/Novokuznetsk',
    name: '(GMT+07:00) Krasnoyarsk Standard Time - Novokuznetsk'
  },
  {
    code: 'Asia/Novosibirsk',
    name: '(GMT+07:00) Novosibirsk Standard Time - Novosibirsk'
  },
  {
    code: 'Asia/Tomsk',
    name: '(GMT+07:00) Tomsk Time'
  },
  {
    code: 'Asia/Jakarta',
    name: '(GMT+07:00) Western Indonesia Time - Jakarta'
  },
  {
    code: 'Asia/Pontianak',
    name: '(GMT+07:00) Western Indonesia Time - Pontianak'
  },
  {
    code: 'Australia/Perth',
    name: '(GMT+08:00) Australian Western Standard Time - Perth'
  },
  {
    code: 'Asia/Brunei',
    name: '(GMT+08:00) Brunei Darussalam Time - Bandar Seri Begawan'
  },
  {
    code: 'Asia/Makassar',
    name: '(GMT+08:00) Central Indonesia Time - Makassar'
  },
  {
    code: 'Asia/Macau',
    name: '(GMT+08:00) China Standard Time - Macao'
  },
  {
    code: 'Asia/Shanghai',
    name: '(GMT+08:00) China Standard Time - Shanghai'
  },
  {
    code: 'Asia/Hong_Kong',
    name: '(GMT+08:00) Hong Kong Standard Time - Hong Kong'
  },
  {
    code: 'Asia/Irkutsk',
    name: '(GMT+08:00) Irkutsk Standard Time - Irkutsk'
  },
  {
    code: 'Asia/Kuala_Lumpur',
    name: '(GMT+08:00) Malaysia Time - Kuala Lumpur'
  },
  {
    code: 'Asia/Kuching',
    name: '(GMT+08:00) Malaysia Time - Kuching'
  },
  {
    code: 'Asia/Manila',
    name: '(GMT+08:00) Philippine Standard Time - Quezon City'
  },
  {
    code: 'Asia/Singapore',
    name: '(GMT+08:00) Singapore Standard Time - Singapore'
  },
  {
    code: 'Asia/Taipei',
    name: '(GMT+08:00) Taipei Standard Time - Taipei'
  },
  {
    code: 'Asia/Choibalsan',
    name: '(GMT+08:00) Ulaanbaatar Standard Time - Choibalsan'
  },
  {
    code: 'Asia/Ulaanbaatar',
    name: '(GMT+08:00) Ulaanbaatar Standard Time - Ulan Bator'
  },
  {
    code: 'Australia/Eucla',
    name: '(GMT+08:45) Australian Central Western Standard Time - Eucla'
  },
  {
    code: 'Asia/Dili',
    name: '(GMT+09:00) East Timor Time - Dili'
  },
  {
    code: 'Asia/Jayapura',
    name: '(GMT+09:00) Eastern Indonesia Time - Ambon'
  },
  {
    code: 'Asia/Tokyo',
    name: '(GMT+09:00) Japan Standard Time - Tokyo'
  },
  {
    code: 'Asia/Pyongyang',
    name: '(GMT+09:00) Korean Standard Time - Pyongyang'
  },
  {
    code: 'Asia/Seoul',
    name: '(GMT+09:00) Korean Standard Time - Seoul'
  },
  {
    code: 'Pacific/Palau',
    name: '(GMT+09:00) Palau Time - Ngerulmud'
  },
  {
    code: 'Asia/Chita',
    name: '(GMT+09:00) Yakutsk Standard Time - Chita'
  },
  {
    code: 'Asia/Khandyga',
    name: '(GMT+09:00) Yakutsk Standard Time - Khandyga'
  },
  {
    code: 'Asia/Yakutsk',
    name: '(GMT+09:00) Yakutsk Standard Time - Yakutsk'
  },
  {
    code: 'Australia/Darwin',
    name: '(GMT+09:30) Australian Central Standard Time - Darwin'
  },
  {
    code: 'Australia/Adelaide',
    name: '(GMT+09:30) Australian Central Standard Time - Adelaide'
  },
  {
    code: 'Australia/Broken_Hill',
    name: '(GMT+09:30) Australian Central Standard Time - Broken Hill'
  },
  {
    code: 'Australia/Brisbane',
    name: '(GMT+10:00) Australian Eastern Standard Time - Brisbane'
  },
  {
    code: 'Australia/Lindeman',
    name: '(GMT+10:00) Australian Eastern Standard Time - Lindeman'
  },
  {
    code: 'Pacific/Guam',
    name: '(GMT+10:00) Chamorro Standard Time'
  },
  {
    code: 'Pacific/Chuuk',
    name: '(GMT+10:00) Chuuk Time - Chuuk'
  },
  {
    code: 'Australia/Hobart',
    name: '(GMT+10:00) Australian Eastern Standard Time - Hobart'
  },
  {
    code: 'Antarctica/Macquarie',
    name: '(GMT+10:00) Australian Eastern Standard Time - Macquarie'
  },
  {
    code: 'Australia/Melbourne',
    name: '(GMT+10:00) Australian Eastern Standard Time - Melbourne'
  },
  {
    code: 'Australia/Sydney',
    name: '(GMT+10:00) Australian Eastern Standard Time - Sydney'
  },
  {
    code: 'Pacific/Port_Moresby',
    name: '(GMT+10:00) Papua New Guinea Time - Port Moresby'
  },
  {
    code: 'Asia/Ust-Nera',
    name: '(GMT+10:00) Vladivostok Standard Time - Ust-Nera'
  },
  {
    code: 'Asia/Vladivostok',
    name: '(GMT+10:00) Vladivostok Standard Time - Vladivostok'
  },
  {
    code: 'Australia/Lord_Howe',
    name: '(GMT+10:30) Lord Howe Standard Time - Lord Howe'
  },
  {
    code: 'Pacific/Bougainville',
    name: '(GMT+11:00) Bougainville Time'
  },
  {
    code: 'Antarctica/Casey',
    name: '(GMT+11:00) Casey Time - Casey'
  },
  {
    code: 'Pacific/Kosrae',
    name: '(GMT+11:00) Kosrae Time - Kosrae'
  },
  {
    code: 'Asia/Magadan',
    name: '(GMT+11:00) Magadan Standard Time'
  },
  {
    code: 'Pacific/Noumea',
    name: '(GMT+11:00) New Caledonia Standard Time - Noumea'
  },
  {
    code: 'Pacific/Norfolk',
    name: '(GMT+11:00) Norfolk Island Time - Kingston'
  },
  {
    code: 'Pacific/Pohnpei',
    name: '(GMT+11:00) Ponape Time'
  },
  {
    code: 'Asia/Sakhalin',
    name: '(GMT+11:00) Sakhalin Standard Time - Yuzhno Sakhalinsk'
  },
  {
    code: 'Pacific/Guadalcanal',
    name: '(GMT+11:00) Solomon Islands Time - Honiara'
  },
  {
    code: 'Asia/Srednekolymsk',
    name: '(GMT+11:00) Srednekolymsk Time'
  },
  {
    code: 'Pacific/Efate',
    name: '(GMT+11:00) Vanuatu Standard Time - Port Vila'
  },
  {
    code: 'Asia/Anadyr',
    name: '(GMT+12:00) Anadyr Standard Time'
  },
  {
    code: 'Pacific/Fiji',
    name: '(GMT+12:00) Fiji Standard Time - Suva'
  },
  {
    code: 'Pacific/Tarawa',
    name: '(GMT+12:00) Gilbert Islands Time - Tarawa'
  },
  {
    code: 'Pacific/Kwajalein',
    name: '(GMT+12:00) Marshall Islands Time - Kwajalein'
  },
  {
    code: 'Pacific/Majuro',
    name: '(GMT+12:00) Marshall Islands Time - Majuro'
  },
  {
    code: 'Pacific/Nauru',
    name: '(GMT+12:00) Nauru Time - Yaren'
  },
  {
    code: 'Pacific/Auckland',
    name: '(GMT+12:00) New Zealand Time - Auckland'
  },
  {
    code: 'Asia/Kamchatka',
    name: '(GMT+12:00) Petropavlovsk-Kamchatski Standard Time - Petropavlovsk Kamchatsky'
  },
  {
    code: 'Pacific/Funafuti',
    name: '(GMT+12:00) Tuvalu Time - Funafuti'
  },
  {
    code: 'Pacific/Wake',
    name: '(GMT+12:00) Wake Island Time - Wake'
  },
  {
    code: 'Pacific/Wallis',
    name: '(GMT+12:00) Wallis & Futuna Time - Mata Utu'
  },
  {
    code: 'Pacific/Chatham',
    name: '(GMT+12:45) Chatham Standard Time - Chatham'
  },
  {
    code: 'Pacific/Apia',
    name: '(GMT+13:00) Apia Standard Time - Apia'
  },
  {
    code: 'Pacific/Kanton',
    name: '(GMT+13:00) Phoenix Islands Time - Enderbury'
  },
  {
    code: 'Pacific/Fakaofo',
    name: '(GMT+13:00) Tokelau Time - Fakaofo'
  },
  {
    code: 'Pacific/Tongatapu',
    name: '(GMT+13:00) Tonga Standard Time - Nuku Alofa'
  },
  {
    code: 'Pacific/Kiritimati',
    name: '(GMT+14:00) Line Islands Time - Kiritimati'
  }
]

export { timezone }
