window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "api",
          "index",
          "interact",
          "librari",
          "library.j",
          "readm",
          "spotifi",
          "spotify'"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "Base.html": [
          "assign",
          "base",
          "class",
          "data",
          "item",
          "structur"
        ],
        "HTTPError.html": [
          "class",
          "error",
          "http",
          "httperror"
        ],
        "HTTPError.html#response": [
          "fetch",
          "fetch#respons",
          "httperror#respons",
          "member",
          "node",
          "respons"
        ],
        "ApiError.html": [
          "api",
          "apierror",
          "class",
          "error"
        ],
        "ApiError.html#error": [
          "apierror#error",
          "error",
          "fetch",
          "member",
          "number",
          "respons",
          "statu"
        ],
        "Util.html": [
          "class",
          "client'",
          "spotifi",
          "util"
        ],
        "Util.html#spotify": [
          "client",
          "member",
          "spotifi",
          "util#spotifi"
        ],
        "Util.html#toJson": [
          "check",
          "function",
          "json",
          "object|nul",
          "respons",
          "see",
          "tojson",
          "util#tojson"
        ],
        "Util.html#fetch": [
          "api",
          "bodi",
          "fetch",
          "fetch#response&gt",
          "function",
          "method",
          "option",
          "path",
          "promise.&lt;nod",
          "spotify'",
          "util#fetch"
        ],
        "AudioManager.html": [
          "audiomanag",
          "class",
          "manag",
          "spotifi",
          "track"
        ],
        "AudioManager.html#spotify": [
          "audiomanager#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "AudioManager.html#features": [
          "audio",
          "audiomanager#featur",
          "featur",
          "function",
          "id",
          "identifi",
          "inform",
          "promise.&lt;(audio|httperror|apierror)&gt",
          "singl",
          "spotifi",
          "track",
          "uniqu"
        ],
        "AudioManager.html#analysis": [
          "analysi",
          "audio",
          "audiomanager#analysi",
          "catalog",
          "content",
          "describ",
          "function",
          "id",
          "includ",
          "level",
          "low",
          "music",
          "pitch",
          "promise.&lt;(audio|httperror|apierror)&gt",
          "rhythm",
          "spotifi",
          "structur",
          "timbr",
          "track",
          "track’"
        ],
        "Album.html": [
          "album",
          "class",
          "repres"
        ],
        "Album.html#spotify": [
          "album#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "Album.html#play": [
          "album",
          "album#play",
          "function",
          "option",
          "play",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut"
        ],
        "Album.html#save": [
          "album",
          "album#sav",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "shortcut"
        ],
        "Album.html#remove": [
          "album",
          "album#remov",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "shortcut"
        ],
        "Album.html#starred": [
          "album",
          "album#star",
          "check",
          "current",
          "function",
          "librari",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "shortcut",
          "spotifi",
          "star",
          "user'"
        ],
        "Artist.html": [
          "artist",
          "class",
          "repres"
        ],
        "Artist.html#spotify": [
          "artist#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "Artist.html#albums": [
          "album",
          "artist",
          "artist#album",
          "function",
          "option",
          "promise.&lt;(array.&lt;album&gt;|httperror|apierror)&gt",
          "shortcut"
        ],
        "Artist.html#follow": [
          "artist",
          "artist#follow",
          "follow",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut"
        ],
        "Artist.html#unfollow": [
          "artist",
          "artist#unfollow",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut",
          "unfollow"
        ],
        "Artist.html#following": [
          "artist",
          "artist#follow",
          "check",
          "current",
          "follow",
          "function",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "shortcut",
          "user"
        ],
        "Artist.html#top": [
          "artist",
          "artist#top",
          "countri",
          "function",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "shortcut",
          "top",
          "track"
        ],
        "Artist.html#related": [
          "artist",
          "artist#rel",
          "function",
          "promise.&lt;(array.&lt;artist&gt;|httperror|apierror)&gt",
          "relat",
          "shortcut"
        ],
        "Audio.html": [
          "audio",
          "class",
          "repres",
          "track'"
        ],
        "Audio.html#spotify": [
          "audio#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "Audio.html#features": [
          "audio",
          "audio#featur",
          "featur",
          "function",
          "promise.&lt;(audio|httperror|apierror)&gt",
          "shortcut",
          "track'"
        ],
        "Audio.html#analysis": [
          "analysi",
          "audio",
          "audio#analysi",
          "function",
          "promise.&lt;(audio|httperror|apierror)&gt",
          "shortcut",
          "track'"
        ],
        "Episode.html": [
          "class",
          "episod",
          "repres"
        ],
        "Episode.html#spotify": [
          "client",
          "episode#spotifi",
          "member",
          "spotifi"
        ],
        "Episode.html#save": [
          "episod",
          "episode#sav",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "shortcut"
        ],
        "Episode.html#remove": [
          "episod",
          "episode#remov",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "shortcut"
        ],
        "Episode.html#starred": [
          "check",
          "current",
          "episod",
          "episode#star",
          "function",
          "librari",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "shortcut",
          "spotifi",
          "star",
          "user'"
        ],
        "Episode.html#queue": [
          "devic",
          "episod",
          "episode#queu",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "queue",
          "shortcut"
        ],
        "User.html": [
          "class",
          "repres",
          "user"
        ],
        "User.html#spotify": [
          "client",
          "member",
          "spotifi",
          "user#spotifi"
        ],
        "User.html#follow": [
          "follow",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut",
          "user",
          "user#follow"
        ],
        "User.html#unfollow": [
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut",
          "unfollow",
          "user",
          "user#unfollow"
        ],
        "User.html#following": [
          "check",
          "current",
          "follow",
          "function",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "shortcut",
          "user",
          "user#follow"
        ],
        "Playlist.html": [
          "class",
          "playlist",
          "repres"
        ],
        "Playlist.html#spotify": [
          "client",
          "member",
          "playlist#spotifi",
          "spotifi"
        ],
        "Playlist.html#play": [
          "function",
          "option",
          "play",
          "playlist",
          "playlist#play",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut"
        ],
        "Playlist.html#modify": [
          "function",
          "modifi",
          "option",
          "playlist",
          "playlist#modifi",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut"
        ],
        "Playlist.html#add": [
          "add",
          "function",
          "playlist",
          "playlist#add",
          "posit",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut",
          "track",
          "uri"
        ],
        "Playlist.html#remove": [
          "function",
          "playlist",
          "playlist#remov",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "shortcut",
          "snapshot",
          "track",
          "uri"
        ],
        "Playlist.html#follow": [
          "follow",
          "function",
          "playlist",
          "playlist#follow",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut"
        ],
        "Playlist.html#unfollow": [
          "function",
          "playlist",
          "playlist#unfollow",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut",
          "unfollow"
        ],
        "Playlist.html#following": [
          "check",
          "follow",
          "function",
          "playlist",
          "playlist#follow",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "shortcut",
          "user",
          "user'"
        ],
        "Playlist.html#cover": [
          "art",
          "cover",
          "function",
          "imag",
          "playlist",
          "playlist#cov",
          "promise.&lt;(image|status|httperror|apierror)&gt",
          "shortcut",
          "upload"
        ],
        "Show.html": [
          "class",
          "repres",
          "show"
        ],
        "Show.html#spotify": [
          "client",
          "member",
          "show#spotifi",
          "spotifi"
        ],
        "Show.html#play": [
          "function",
          "option",
          "play",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shortcut",
          "show",
          "show#play"
        ],
        "Show.html#save": [
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "shortcut",
          "show",
          "show#sav"
        ],
        "Show.html#remove": [
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "shortcut",
          "show",
          "show#remov"
        ],
        "Show.html#starred": [
          "check",
          "current",
          "function",
          "librari",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "save",
          "shortcut",
          "show",
          "show#star",
          "spotifi",
          "star",
          "user'"
        ],
        "CategoryManager.html": [
          "categori",
          "categorymanag",
          "class",
          "manag",
          "spotifi"
        ],
        "CategoryManager.html#spotify": [
          "categorymanager#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "CategoryManager.html#get": [
          "categori",
          "categorymanager#get",
          "countri",
          "function",
          "id",
          "item",
          "local",
          "promise.&lt;(category|httperror|apierror)&gt",
          "singl",
          "spotifi",
          "tag",
          "us"
        ],
        "CategoryManager.html#all": [
          "categori",
          "categorymanager#al",
          "function",
          "item",
          "list",
          "option",
          "promise.&lt;(array.&lt;category&gt;|httperror|apierror)&gt",
          "spotifi",
          "tag",
          "us"
        ],
        "Track.html": [
          "class",
          "repres",
          "track"
        ],
        "Track.html#spotify": [
          "client",
          "member",
          "spotifi",
          "track#spotifi"
        ],
        "Track.html#audio": [
          "audio",
          "member",
          "shortcut",
          "track",
          "track#audio"
        ],
        "Track.html#save": [
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "shortcut",
          "track",
          "track#sav"
        ],
        "Track.html#remove": [
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "shortcut",
          "track",
          "track#remov"
        ],
        "Track.html#starred": [
          "check",
          "current",
          "function",
          "librari",
          "music",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "save",
          "shortcut",
          "song",
          "spotifi",
          "star",
          "track#star",
          "user'"
        ],
        "Track.html#queue": [
          "devic",
          "function",
          "promise.&lt;(status|httperror|apierror)&gt",
          "queue",
          "shortcut",
          "track",
          "track#queu"
        ],
        "EpisodeManager.html": [
          "class",
          "episod",
          "episodemanag",
          "manag",
          "spotifi"
        ],
        "EpisodeManager.html#spotify": [
          "client",
          "episodemanager#spotifi",
          "member",
          "spotifi"
        ],
        "EpisodeManager.html#get": [
          "catalog",
          "episod",
          "episodemanager#get",
          "function",
          "id",
          "identifi",
          "inform",
          "promise.&lt;(episode|httperror|apierror)&gt",
          "singl",
          "spotifi",
          "uniqu"
        ],
        "EpisodeManager.html#users": [
          "current",
          "episod",
          "episodemanager#us",
          "function",
          "librari",
          "list",
          "option",
          "promise.&lt;(array.&lt;episode&gt;|httperror|apierror)&gt",
          "save",
          "spotifi",
          "user",
          "user'"
        ],
        "EpisodeManager.html#save": [
          "current",
          "episod",
          "episodemanager#sav",
          "function",
          "id",
          "librari",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "user'"
        ],
        "EpisodeManager.html#remove": [
          "current",
          "episod",
          "episodemanager#remov",
          "function",
          "id",
          "librari",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "user'"
        ],
        "EpisodeManager.html#starred": [
          "alreadi",
          "check",
          "current",
          "episod",
          "episodemanager#star",
          "function",
          "id",
          "librari",
          "more",
          "on",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "save",
          "spotifi",
          "star",
          "user'"
        ],
        "EpisodeManager.html#search": [
          "catalog",
          "episod",
          "episodemanager#search",
          "function",
          "inform",
          "option",
          "promise.&lt;(array.&lt;episode&gt;|httperror|apierror)&gt",
          "queri",
          "search",
          "spotifi"
        ],
        "PlayerManager.html": [
          "class",
          "manag",
          "play",
          "playermanag",
          "spotifi"
        ],
        "PlayerManager.html#spotify": [
          "client",
          "member",
          "playermanager#spotifi",
          "spotifi"
        ],
        "PlayerManager.html#state": [
          "current",
          "function",
          "inform",
          "playback",
          "playermanager#st",
          "promise.&lt;(state|httperror|apierror)&gt",
          "state",
          "type",
          "user'"
        ],
        "PlayerManager.html#transfer": [
          "determin",
          "devic",
          "function",
          "id",
          "new",
          "play",
          "playback",
          "playermanager#transf",
          "promise.&lt;(status|httperror|apierror)&gt",
          "start",
          "transfer"
        ],
        "PlayerManager.html#devices": [
          "avail",
          "devic",
          "function",
          "inform",
          "playermanager#devic",
          "promise.&lt;(array.&lt;device&gt;|httperror|apierror)&gt",
          "user’"
        ],
        "PlayerManager.html#current": [
          "account",
          "be",
          "current",
          "function",
          "object",
          "play",
          "playermanager#curr",
          "promise.&lt;(track|httperror|apierror)&gt",
          "spotifi",
          "type",
          "user'"
        ],
        "PlayerManager.html#start": [
          "context",
          "function",
          "new",
          "option",
          "playermanager#start",
          "promise.&lt;(status|httperror|apierror)&gt",
          "start",
          "uri"
        ],
        "PlayerManager.html#resume": [
          "activ",
          "current",
          "devic",
          "function",
          "playback",
          "playermanager#resum",
          "promise.&lt;(status|httperror|apierror)&gt",
          "resum",
          "user'"
        ],
        "PlayerManager.html#pause": [
          "account",
          "devic",
          "function",
          "paus",
          "playback",
          "playermanager#paus",
          "promise.&lt;(status|httperror|apierror)&gt",
          "user'"
        ],
        "PlayerManager.html#next": [
          "devic",
          "function",
          "next",
          "playermanager#next",
          "promise.&lt;(status|httperror|apierror)&gt",
          "queue",
          "skip",
          "track",
          "user’"
        ],
        "PlayerManager.html#back": [
          "back",
          "devic",
          "function",
          "playermanager#back",
          "previou",
          "promise.&lt;(status|httperror|apierror)&gt",
          "queue",
          "skip",
          "track",
          "user’"
        ],
        "PlayerManager.html#seek": [
          "current",
          "devic",
          "function",
          "given",
          "ms",
          "play",
          "playermanager#seek",
          "posit",
          "promise.&lt;(status|httperror|apierror)&gt",
          "seek",
          "track",
          "user’"
        ],
        "PlayerManager.html#repeat": [
          "context",
          "devic",
          "function",
          "mode",
          "option",
          "playback",
          "playermanager#repeat",
          "promise.&lt;(status|httperror|apierror)&gt",
          "repeat",
          "set",
          "state",
          "track",
          "user'"
        ],
        "PlayerManager.html#volume": [
          "current",
          "devic",
          "function",
          "playback",
          "playermanager#volum",
          "promise.&lt;(status|httperror|apierror)&gt",
          "set",
          "user’",
          "vol",
          "volum"
        ],
        "PlayerManager.html#shuffle": [
          "devic",
          "function",
          "playback",
          "playermanager#shuffl",
          "promise.&lt;(status|httperror|apierror)&gt",
          "shuffl",
          "state",
          "toggl",
          "user’"
        ],
        "PlayerManager.html#recent": [
          "current",
          "doesn't",
          "episod",
          "function",
          "note",
          "option",
          "play",
          "playermanager#rec",
          "podcast",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "recent",
          "support",
          "track",
          "user'"
        ],
        "PlayerManager.html#queue": [
          "add",
          "current",
          "devic",
          "end",
          "function",
          "item",
          "playback",
          "playermanager#queu",
          "promise.&lt;(status|httperror|apierror)&gt",
          "queue",
          "uri",
          "user'"
        ],
        "AlbumManager.html": [
          "album",
          "albummanag",
          "class",
          "manag",
          "spotifi"
        ],
        "AlbumManager.html#spotify": [
          "albummanager#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "AlbumManager.html#get": [
          "album",
          "albummanager#get",
          "catalog",
          "function",
          "id",
          "inform",
          "promise.&lt;(album|httperror|apierror)&gt",
          "singl",
          "spotifi"
        ],
        "AlbumManager.html#tracks": [
          "albummanager#track",
          "album’",
          "catalog",
          "function",
          "id",
          "inform",
          "option",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "spotifi",
          "track"
        ],
        "AlbumManager.html#saved": [
          "album",
          "albummanager#sav",
          "current",
          "function",
          "librari",
          "list",
          "music",
          "option",
          "promise.&lt;(array.&lt;album&gt;|httperror|apierror)&gt",
          "save",
          "spotifi",
          "user'"
        ],
        "AlbumManager.html#save": [
          "album",
          "albummanager#sav",
          "current",
          "function",
          "id",
          "librari",
          "more",
          "music",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "user'"
        ],
        "AlbumManager.html#remove": [
          "album",
          "albummanager#remov",
          "current",
          "function",
          "id",
          "librari",
          "more",
          "music",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "user'"
        ],
        "AlbumManager.html#starred": [
          "album",
          "albummanager#star",
          "alreadi",
          "check",
          "current",
          "function",
          "id",
          "librari",
          "more",
          "music",
          "on",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "save",
          "spotifi",
          "star",
          "user'"
        ],
        "AlbumManager.html#releases": [
          "album",
          "albummanager#releas",
          "featur",
          "function",
          "list",
          "new",
          "option",
          "promise.&lt;(array.&lt;album&gt;|httperror|apierror)&gt",
          "releas",
          "spotifi"
        ],
        "AlbumManager.html#search": [
          "album",
          "albummanager#search",
          "catalog",
          "function",
          "inform",
          "option",
          "promise.&lt;(array.&lt;album&gt;|httperror|apierror)&gt",
          "queri",
          "search",
          "spotifi"
        ],
        "PlaylistManager.html": [
          "class",
          "manag",
          "play",
          "playlistmanag",
          "spotifi"
        ],
        "PlaylistManager.html#spotify": [
          "client",
          "member",
          "playlistmanager#spotifi",
          "spotifi"
        ],
        "PlaylistManager.html#get": [
          "function",
          "id",
          "option",
          "own",
          "playlist",
          "playlistmanager#get",
          "promise.&lt;(playlist|httperror|apierror)&gt",
          "spotifi",
          "user"
        ],
        "PlaylistManager.html#modify": [
          "chang",
          "cours",
          "function",
          "id",
          "modifi",
          "name",
          "option",
          "playlist",
          "playlist'",
          "playlistmanager#modifi",
          "promise.&lt;(status|httperror|apierror)&gt",
          "public/priv",
          "state",
          "user"
        ],
        "PlaylistManager.html#update": [
          "depend",
          "function",
          "id",
          "item",
          "option",
          "paramet",
          "playlist",
          "playlistmanager#upd",
          "reorder",
          "replac",
          "request'",
          "status|httperror|apierror",
          "updat"
        ],
        "PlaylistManager.html#tracks": [
          "detail",
          "full",
          "function",
          "id",
          "item",
          "option",
          "own",
          "playlist",
          "playlistmanager#track",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "spotifi",
          "track",
          "user"
        ],
        "PlaylistManager.html#add": [
          "add",
          "function",
          "id",
          "item",
          "more",
          "on",
          "playlist",
          "playlistmanager#add",
          "posit",
          "promise.&lt;(status|httperror|apierror)&gt",
          "uri",
          "user'"
        ],
        "PlaylistManager.html#remove": [
          "function",
          "id",
          "item",
          "more",
          "on",
          "playlist",
          "playlistmanager#remov",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "snapshot",
          "uri",
          "user'"
        ],
        "PlaylistManager.html#users": [
          "current",
          "follow",
          "function",
          "id",
          "list",
          "option",
          "own",
          "playlist",
          "playlistmanager#us",
          "promise.&lt;(array.&lt;playlist&gt;|httperror|apierror)&gt",
          "spotifi",
          "user"
        ],
        "PlaylistManager.html#follow": [
          "add",
          "current",
          "follow",
          "function",
          "id",
          "playlist",
          "playlistmanager#follow",
          "promise.&lt;(status|httperror|apierror)&gt",
          "state",
          "user"
        ],
        "PlaylistManager.html#unfollow": [
          "current",
          "follow",
          "function",
          "id",
          "playlist",
          "playlistmanager#unfollow",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "unfollow",
          "user"
        ],
        "PlaylistManager.html#followers": [
          "array.&lt;boolean&gt;|httperror|apierror",
          "check",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "playlist",
          "playlistmanager#follow",
          "see",
          "specifi",
          "spotifi",
          "user"
        ],
        "PlaylistManager.html#create": [
          "creat",
          "function",
          "id",
          "option",
          "playlist",
          "playlistmanager#cr",
          "promise.&lt;(playlist|httperror|apierror)&gt",
          "spotifi",
          "user"
        ],
        "PlaylistManager.html#featured": [
          "featur",
          "function",
          "list",
          "option",
          "playlist",
          "playlistmanager#featur",
          "promise.&lt;(array.&lt;playlist&gt;|httperror|apierror)&gt",
          "spotifi"
        ],
        "PlaylistManager.html#categories": [
          "categori",
          "function",
          "id",
          "list",
          "option",
          "particular",
          "playlist",
          "playlistmanager#categori",
          "promise.&lt;(array.&lt;playlist&gt;|httperror|apierror)&gt",
          "spotifi",
          "tag"
        ],
        "PlaylistManager.html#cover": [
          "associ",
          "cover",
          "current",
          "function",
          "id",
          "imag",
          "playlist",
          "playlistmanager#cov",
          "promise.&lt;(image|status|httperror|apierror)&gt",
          "specif"
        ],
        "PlaylistManager.html#search": [
          "catalog",
          "function",
          "inform",
          "option",
          "playlist",
          "playlistmanager#search",
          "promise.&lt;(array.&lt;playlist&gt;|httperror|apierror)&gt",
          "queri",
          "search",
          "spotifi"
        ],
        "ShowManager.html": [
          "class",
          "manag",
          "play",
          "showmanag",
          "spotifi"
        ],
        "ShowManager.html#spotify": [
          "client",
          "member",
          "showmanager#spotifi",
          "spotifi"
        ],
        "ShowManager.html#get": [
          "catalog",
          "function",
          "id",
          "identifi",
          "inform",
          "promise.&lt;(show|httperror|apierror)&gt",
          "show",
          "showmanager#get",
          "singl",
          "spotifi",
          "uniqu"
        ],
        "ShowManager.html#episodes": [
          "catalog",
          "episod",
          "function",
          "id",
          "inform",
          "option",
          "promise.&lt;(array.&lt;episode&gt;|httperror|apierror)&gt",
          "showmanager#episod",
          "show’",
          "spotifi"
        ],
        "ShowManager.html#users": [
          "current",
          "function",
          "librari",
          "list",
          "option",
          "promise.&lt;(array.&lt;show&gt;|httperror|apierror)&gt",
          "save",
          "show",
          "showmanager#us",
          "spotifi",
          "user",
          "user'"
        ],
        "ShowManager.html#save": [
          "current",
          "function",
          "id",
          "librari",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "show",
          "showmanager#sav",
          "spotifi",
          "user'"
        ],
        "ShowManager.html#remove": [
          "current",
          "delet",
          "function",
          "id",
          "librari",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "show",
          "showmanager#remov",
          "spotifi",
          "user'"
        ],
        "ShowManager.html#starred": [
          "alreadi",
          "check",
          "current",
          "function",
          "id",
          "librari",
          "more",
          "on",
          "promise.&lt;(boolean|array.&lt;boolean&gt;|httperror|apierror)&gt",
          "save",
          "show",
          "showmanager#star",
          "spotifi",
          "star",
          "user'"
        ],
        "ShowManager.html#search": [
          "catalog",
          "function",
          "inform",
          "option",
          "promise.&lt;(array.&lt;show&gt;|httperror|apierror)&gt",
          "queri",
          "search",
          "show",
          "showmanager#search",
          "spotifi"
        ],
        "TrackManager.html": [
          "class",
          "manag",
          "spotifi",
          "track",
          "trackmanag"
        ],
        "TrackManager.html#spotify": [
          "client",
          "member",
          "spotifi",
          "trackmanager#spotifi"
        ],
        "TrackManager.html#audio": [
          "audio",
          "featur",
          "member",
          "trackmanager#audio"
        ],
        "TrackManager.html#get": [
          "catalog",
          "function",
          "id",
          "identifi",
          "inform",
          "promise.&lt;(track|httperror|apierror)&gt",
          "singl",
          "spotifi",
          "track",
          "trackmanager#get",
          "uniqu"
        ],
        "TrackManager.html#saved": [
          "current",
          "function",
          "librari",
          "list",
          "music",
          "option",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "save",
          "song",
          "spotifi",
          "trackmanager#sav",
          "user'"
        ],
        "TrackManager.html#save": [
          "current",
          "function",
          "id",
          "librari",
          "more",
          "music",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "save",
          "track",
          "trackmanager#sav",
          "user'"
        ],
        "TrackManager.html#remove": [
          "current",
          "function",
          "id",
          "librari",
          "more",
          "music",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "track",
          "trackmanager#remov",
          "user'"
        ],
        "TrackManager.html#starred": [
          "alreadi",
          "check",
          "current",
          "function",
          "id",
          "librari",
          "more",
          "music",
          "on",
          "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
          "save",
          "spotifi",
          "star",
          "track",
          "trackmanager#star",
          "user'"
        ],
        "TrackManager.html#search": [
          "catalog",
          "function",
          "inform",
          "option",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "queri",
          "search",
          "spotifi",
          "track",
          "trackmanager#search"
        ],
        "TrackManager.html#recommendations": [
          "against",
          "artist",
          "avail",
          "base",
          "entiti",
          "function",
          "gener",
          "given",
          "inform",
          "match",
          "option",
          "promise.&lt;(array.&lt;tracks&gt;|httperror|apierror)&gt",
          "recommend",
          "seed",
          "similar",
          "track",
          "trackmanager#recommend"
        ],
        "ArtistManager.html": [
          "artist",
          "artistmanag",
          "class",
          "manag",
          "spotifi"
        ],
        "ArtistManager.html#spotify": [
          "artistmanager#spotifi",
          "client",
          "member",
          "spotifi"
        ],
        "ArtistManager.html#get": [
          "artist",
          "artistmanager#get",
          "catalog",
          "function",
          "id",
          "identifi",
          "inform",
          "promise.&lt;(artist|httperror|apierror)&gt",
          "singl",
          "spotifi",
          "uniqu"
        ],
        "ArtistManager.html#follow": [
          "add",
          "artist",
          "artistmanager#follow",
          "current",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "user"
        ],
        "ArtistManager.html#unfollow": [
          "artist",
          "artistmanager#unfollow",
          "current",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "unfollow",
          "user"
        ],
        "ArtistManager.html#following": [
          "array.&lt;boolean&gt;|httperror|apierror",
          "artist",
          "artistmanager#follow",
          "check",
          "current",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "see",
          "user"
        ],
        "ArtistManager.html#top": [
          "artist'",
          "artistmanager#top",
          "catalog",
          "countri",
          "function",
          "id",
          "inform",
          "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
          "spotifi",
          "top",
          "track"
        ],
        "ArtistManager.html#related": [
          "artist",
          "artistmanager#rel",
          "catalog",
          "function",
          "given",
          "id",
          "inform",
          "promise.&lt;(array.&lt;artist&gt;|httperror|apierror)&gt",
          "relat",
          "similar",
          "spotifi"
        ],
        "ArtistManager.html#search": [
          "artist",
          "artistmanager#search",
          "catalog",
          "function",
          "inform",
          "option",
          "promise.&lt;(array.&lt;artist&gt;|httperror|apierror)&gt",
          "queri",
          "search",
          "spotifi"
        ],
        "UserManager.html": [
          "class",
          "manag",
          "spotifi",
          "user",
          "usermanag"
        ],
        "UserManager.html#spotify": [
          "client",
          "member",
          "spotifi",
          "usermanager#spotifi"
        ],
        "UserManager.html#get": [
          "function",
          "id",
          "inform",
          "profil",
          "promise.&lt;(user|httperror|apierror)&gt",
          "public",
          "spotifi",
          "user",
          "usermanager#get"
        ],
        "UserManager.html#top": [
          "affin",
          "artist",
          "base",
          "calcul",
          "current",
          "function",
          "option",
          "promise.&lt;(array.&lt;artist&gt;|array.&lt;track&gt;|httperror|apierror)&gt",
          "top",
          "track",
          "type",
          "user'",
          "usermanager#top"
        ],
        "UserManager.html#followed": [
          "array.&lt;artist&gt;|httperror|apierror",
          "artist",
          "current",
          "follow",
          "function",
          "option",
          "user'",
          "usermanager#follow"
        ],
        "UserManager.html#follow": [
          "add",
          "current",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "user",
          "usermanager#follow"
        ],
        "UserManager.html#unfollow": [
          "current",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "promise.&lt;(status|httperror|apierror)&gt",
          "remov",
          "unfollow",
          "user",
          "usermanager#unfollow"
        ],
        "UserManager.html#following": [
          "array.&lt;boolean&gt;|httperror|apierror",
          "check",
          "current",
          "follow",
          "function",
          "id",
          "more",
          "on",
          "see",
          "user",
          "usermanager#follow"
        ],
        "UserManager.html#me": [
          "current",
          "detail",
          "function",
          "includ",
          "inform",
          "profil",
          "promise.&lt;(user|httperror|apierror)&gt",
          "user",
          "user'",
          "usermanager#m",
          "usernam"
        ],
        "Spotify.html": [
          "class",
          "client",
          "spotifi"
        ],
        "Spotify.html#access_token": [
          "access",
          "access_token",
          "client'",
          "member",
          "spotify#access_token",
          "string",
          "token"
        ],
        "Spotify.html#util": [
          "client",
          "member",
          "spotifi",
          "spotify#util",
          "util"
        ],
        "Spotify.html#player": [
          "manag",
          "member",
          "player",
          "playermanag",
          "spotify#play"
        ],
        "Spotify.html#tracks": [
          "manag",
          "member",
          "spotify#track",
          "track",
          "trackmanag"
        ],
        "Spotify.html#playlists": [
          "manag",
          "member",
          "playlist",
          "playlistmanag",
          "spotify#playlist"
        ],
        "Spotify.html#episodes": [
          "episod",
          "manag",
          "member",
          "showmanag",
          "spotify#episod"
        ],
        "Spotify.html#shows": [
          "manag",
          "member",
          "show",
          "showmanag",
          "spotify#show"
        ],
        "Spotify.html#albums": [
          "album",
          "albummanag",
          "manag",
          "member",
          "spotify#album"
        ],
        "Spotify.html#artists": [
          "artist",
          "artistmanag",
          "manag",
          "member",
          "spotify#artist"
        ],
        "Spotify.html#categories": [
          "categori",
          "categorymanag",
          "manag",
          "member",
          "spotify#categori"
        ],
        "Spotify.html#users": [
          "manag",
          "member",
          "spotify#us",
          "user",
          "usermanag"
        ],
        "Spotify.html#refresher": [
          "member",
          "modul",
          "node",
          "oauth2",
          "refresh",
          "refresher|nul",
          "spotifi",
          "spotify#refresh"
        ],
        "Spotify.html#genres": [
          "avail",
          "function",
          "genr",
          "list",
          "promise.&lt;array.&lt;string&gt;&gt",
          "retriev",
          "seed",
          "spotify#genr"
        ],
        "Spotify.html#markets": [
          "avail",
          "function",
          "list",
          "market",
          "promise.&lt;array.&lt;string&gt;&gt",
          "spotifi",
          "spotify#market"
        ],
        "Spotify.html#set": [
          "client",
          "function",
          "key",
          "properti",
          "set",
          "spotifi",
          "spotify#set",
          "valu",
          "void"
        ]
      },
      "length": 177
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "a": {
          "docs": {},
          "p": {
            "docs": {},
            "i": {
              "docs": {
                "index.html": {
                  "ref": "index.html",
                  "tf": 17.5
                },
                "ApiError.html": {
                  "ref": "ApiError.html",
                  "tf": 25
                },
                "Util.html#fetch": {
                  "ref": "Util.html#fetch",
                  "tf": 16.666666666666664
                }
              },
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "ApiError.html": {
                            "ref": "ApiError.html",
                            "tf": 1900
                          }
                        },
                        "#": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "ApiError.html#error": {
                                        "ref": "ApiError.html#error",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "g": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Base.html": {
                        "ref": "Base.html",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "c": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "PlaylistManager.html#cover": {
                        "ref": "PlaylistManager.html#cover",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {
                    "AudioManager.html#features": {
                      "ref": "AudioManager.html#features",
                      "tf": 5.555555555555555
                    },
                    "AudioManager.html#analysis": {
                      "ref": "AudioManager.html#analysis",
                      "tf": 5.555555555555555
                    },
                    "Audio.html": {
                      "ref": "Audio.html",
                      "tf": 1916.6666666666667
                    },
                    "Audio.html#features": {
                      "ref": "Audio.html#features",
                      "tf": 12.5
                    },
                    "Audio.html#analysis": {
                      "ref": "Audio.html#analysis",
                      "tf": 12.5
                    },
                    "Track.html#audio": {
                      "ref": "Track.html#audio",
                      "tf": 766.6666666666666
                    },
                    "TrackManager.html#audio": {
                      "ref": "TrackManager.html#audio",
                      "tf": 775
                    }
                  },
                  "m": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "g": {
                            "docs": {
                              "AudioManager.html": {
                                "ref": "AudioManager.html",
                                "tf": 1900
                              }
                            },
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "#": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "AudioManager.html#spotify": {
                                                    "ref": "AudioManager.html#spotify",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "f": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "AudioManager.html#features": {
                                                  "ref": "AudioManager.html#features",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "a": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "y": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "AudioManager.html#analysis": {
                                                    "ref": "AudioManager.html#analysis",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "#": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Audio.html#spotify": {
                                      "ref": "Audio.html#spotify",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "f": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "r": {
                                "docs": {
                                  "Audio.html#features": {
                                    "ref": "Audio.html#features",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Audio.html#analysis": {
                                      "ref": "Audio.html#analysis",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "y": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "AudioManager.html#analysis": {
                          "ref": "AudioManager.html#analysis",
                          "tf": 688.8888888888889
                        },
                        "Audio.html#analysis": {
                          "ref": "Audio.html#analysis",
                          "tf": 712.5
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "b": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {
                    "Album.html": {
                      "ref": "Album.html",
                      "tf": 1925
                    },
                    "Album.html#play": {
                      "ref": "Album.html#play",
                      "tf": 16.666666666666664
                    },
                    "Album.html#save": {
                      "ref": "Album.html#save",
                      "tf": 16.666666666666664
                    },
                    "Album.html#remove": {
                      "ref": "Album.html#remove",
                      "tf": 16.666666666666664
                    },
                    "Album.html#starred": {
                      "ref": "Album.html#starred",
                      "tf": 6.25
                    },
                    "Artist.html#albums": {
                      "ref": "Artist.html#albums",
                      "tf": 700
                    },
                    "AlbumManager.html": {
                      "ref": "AlbumManager.html",
                      "tf": 16.666666666666664
                    },
                    "AlbumManager.html#get": {
                      "ref": "AlbumManager.html#get",
                      "tf": 10
                    },
                    "AlbumManager.html#saved": {
                      "ref": "AlbumManager.html#saved",
                      "tf": 6.25
                    },
                    "AlbumManager.html#save": {
                      "ref": "AlbumManager.html#save",
                      "tf": 6.25
                    },
                    "AlbumManager.html#remove": {
                      "ref": "AlbumManager.html#remove",
                      "tf": 6.25
                    },
                    "AlbumManager.html#starred": {
                      "ref": "AlbumManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "AlbumManager.html#releases": {
                      "ref": "AlbumManager.html#releases",
                      "tf": 8.333333333333332
                    },
                    "AlbumManager.html#search": {
                      "ref": "AlbumManager.html#search",
                      "tf": 12.5
                    },
                    "Spotify.html#albums": {
                      "ref": "Spotify.html#albums",
                      "tf": 725
                    }
                  },
                  "#": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Album.html#spotify": {
                                      "ref": "Album.html#spotify",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "v": {
                          "docs": {
                            "Album.html#save": {
                              "ref": "Album.html#save",
                              "tf": 1150
                            }
                          }
                        }
                      },
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {
                              "Album.html#starred": {
                                "ref": "Album.html#starred",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "y": {
                            "docs": {
                              "Album.html#play": {
                                "ref": "Album.html#play",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "v": {
                              "docs": {
                                "Album.html#remove": {
                                  "ref": "Album.html#remove",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "g": {
                            "docs": {
                              "AlbumManager.html": {
                                "ref": "AlbumManager.html",
                                "tf": 1900
                              },
                              "Spotify.html#albums": {
                                "ref": "Spotify.html#albums",
                                "tf": 50
                              }
                            },
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "#": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "AlbumManager.html#spotify": {
                                                    "ref": "AlbumManager.html#spotify",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "a": {
                                      "docs": {},
                                      "v": {
                                        "docs": {
                                          "AlbumManager.html#saved": {
                                            "ref": "AlbumManager.html#saved",
                                            "tf": 1150
                                          },
                                          "AlbumManager.html#save": {
                                            "ref": "AlbumManager.html#save",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {
                                            "AlbumManager.html#starred": {
                                              "ref": "AlbumManager.html#starred",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "h": {
                                              "docs": {
                                                "AlbumManager.html#search": {
                                                  "ref": "AlbumManager.html#search",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "AlbumManager.html#get": {
                                            "ref": "AlbumManager.html#get",
                                            "tf": 1300
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "t": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "k": {
                                            "docs": {
                                              "AlbumManager.html#tracks": {
                                                "ref": "AlbumManager.html#tracks",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "v": {
                                            "docs": {
                                              "AlbumManager.html#remove": {
                                                "ref": "AlbumManager.html#remove",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "AlbumManager.html#releases": {
                                                  "ref": "AlbumManager.html#releases",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "’": {
                    "docs": {
                      "AlbumManager.html#tracks": {
                        "ref": "AlbumManager.html#tracks",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "EpisodeManager.html#starred": {
                          "ref": "EpisodeManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "AlbumManager.html#starred": {
                          "ref": "AlbumManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "ShowManager.html#starred": {
                          "ref": "ShowManager.html#starred",
                          "tf": 5
                        },
                        "TrackManager.html#starred": {
                          "ref": "TrackManager.html#starred",
                          "tf": 4.545454545454546
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "t": {
              "docs": {
                "Playlist.html#cover": {
                  "ref": "Playlist.html#cover",
                  "tf": 10
                }
              },
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Artist.html": {
                        "ref": "Artist.html",
                        "tf": 1925
                      },
                      "Artist.html#albums": {
                        "ref": "Artist.html#albums",
                        "tf": 16.666666666666664
                      },
                      "Artist.html#follow": {
                        "ref": "Artist.html#follow",
                        "tf": 16.666666666666664
                      },
                      "Artist.html#unfollow": {
                        "ref": "Artist.html#unfollow",
                        "tf": 16.666666666666664
                      },
                      "Artist.html#following": {
                        "ref": "Artist.html#following",
                        "tf": 8.333333333333332
                      },
                      "Artist.html#top": {
                        "ref": "Artist.html#top",
                        "tf": 12.5
                      },
                      "Artist.html#related": {
                        "ref": "Artist.html#related",
                        "tf": 16.666666666666664
                      },
                      "TrackManager.html#recommendations": {
                        "ref": "TrackManager.html#recommendations",
                        "tf": 3.8461538461538463
                      },
                      "ArtistManager.html": {
                        "ref": "ArtistManager.html",
                        "tf": 16.666666666666664
                      },
                      "ArtistManager.html#get": {
                        "ref": "ArtistManager.html#get",
                        "tf": 5.555555555555555
                      },
                      "ArtistManager.html#follow": {
                        "ref": "ArtistManager.html#follow",
                        "tf": 7.142857142857142
                      },
                      "ArtistManager.html#unfollow": {
                        "ref": "ArtistManager.html#unfollow",
                        "tf": 7.142857142857142
                      },
                      "ArtistManager.html#following": {
                        "ref": "ArtistManager.html#following",
                        "tf": 6.25
                      },
                      "ArtistManager.html#related": {
                        "ref": "ArtistManager.html#related",
                        "tf": 14.285714285714285
                      },
                      "ArtistManager.html#search": {
                        "ref": "ArtistManager.html#search",
                        "tf": 12.5
                      },
                      "UserManager.html#top": {
                        "ref": "UserManager.html#top",
                        "tf": 6.25
                      },
                      "UserManager.html#followed": {
                        "ref": "UserManager.html#followed",
                        "tf": 12.5
                      },
                      "Spotify.html#artists": {
                        "ref": "Spotify.html#artists",
                        "tf": 725
                      }
                    },
                    "#": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Artist.html#spotify": {
                                        "ref": "Artist.html#spotify",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "b": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "m": {
                                "docs": {
                                  "Artist.html#albums": {
                                    "ref": "Artist.html#albums",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "f": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "w": {
                                  "docs": {
                                    "Artist.html#follow": {
                                      "ref": "Artist.html#follow",
                                      "tf": 1150
                                    },
                                    "Artist.html#following": {
                                      "ref": "Artist.html#following",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "u": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {
                                        "Artist.html#unfollow": {
                                          "ref": "Artist.html#unfollow",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "Artist.html#top": {
                                "ref": "Artist.html#top",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      },
                      "r": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Artist.html#related": {
                                "ref": "Artist.html#related",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "m": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "ArtistManager.html": {
                                  "ref": "ArtistManager.html",
                                  "tf": 1900
                                },
                                "Spotify.html#artists": {
                                  "ref": "Spotify.html#artists",
                                  "tf": 50
                                }
                              },
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "#": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {
                                                    "ArtistManager.html#spotify": {
                                                      "ref": "ArtistManager.html#spotify",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "h": {
                                                "docs": {
                                                  "ArtistManager.html#search": {
                                                    "ref": "ArtistManager.html#search",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "ArtistManager.html#get": {
                                              "ref": "ArtistManager.html#get",
                                              "tf": 1300
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "f": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "w": {
                                                "docs": {
                                                  "ArtistManager.html#follow": {
                                                    "ref": "ArtistManager.html#follow",
                                                    "tf": 1150
                                                  },
                                                  "ArtistManager.html#following": {
                                                    "ref": "ArtistManager.html#following",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "u": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "f": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "w": {
                                                    "docs": {
                                                      "ArtistManager.html#unfollow": {
                                                        "ref": "ArtistManager.html#unfollow",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "p": {
                                          "docs": {
                                            "ArtistManager.html#top": {
                                              "ref": "ArtistManager.html#top",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "l": {
                                          "docs": {
                                            "ArtistManager.html#related": {
                                              "ref": "ArtistManager.html#related",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "'": {
                      "docs": {
                        "ArtistManager.html#top": {
                          "ref": "ArtistManager.html#top",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "&": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                ";": {
                                                  "docs": {},
                                                  "|": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "|": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "p": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {
                                                                                          "PlaylistManager.html#followers": {
                                                                                            "ref": "PlaylistManager.html#followers",
                                                                                            "tf": 25
                                                                                          },
                                                                                          "ArtistManager.html#following": {
                                                                                            "ref": "ArtistManager.html#following",
                                                                                            "tf": 25
                                                                                          },
                                                                                          "UserManager.html#following": {
                                                                                            "ref": "UserManager.html#following",
                                                                                            "tf": 25
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              ";": {
                                                "docs": {},
                                                "|": {
                                                  "docs": {},
                                                  "h": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "|": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "p": {
                                                                          "docs": {},
                                                                          "i": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {
                                                                                        "UserManager.html#followed": {
                                                                                          "ref": "UserManager.html#followed",
                                                                                          "tf": 33.33333333333333
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "d": {
              "docs": {
                "Playlist.html#add": {
                  "ref": "Playlist.html#add",
                  "tf": 687.5
                },
                "PlayerManager.html#queue": {
                  "ref": "PlayerManager.html#queue",
                  "tf": 7.142857142857142
                },
                "PlaylistManager.html#add": {
                  "ref": "PlaylistManager.html#add",
                  "tf": 678.3333333333334
                },
                "PlaylistManager.html#follow": {
                  "ref": "PlaylistManager.html#follow",
                  "tf": 10
                },
                "ArtistManager.html#follow": {
                  "ref": "ArtistManager.html#follow",
                  "tf": 7.142857142857142
                },
                "UserManager.html#follow": {
                  "ref": "UserManager.html#follow",
                  "tf": 7.142857142857142
                }
              }
            }
          },
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {
                    "PlayerManager.html#devices": {
                      "ref": "PlayerManager.html#devices",
                      "tf": 12.5
                    },
                    "TrackManager.html#recommendations": {
                      "ref": "TrackManager.html#recommendations",
                      "tf": 3.8461538461538463
                    },
                    "Spotify.html#genres": {
                      "ref": "Spotify.html#genres",
                      "tf": 10
                    },
                    "Spotify.html#markets": {
                      "ref": "Spotify.html#markets",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "c": {
              "docs": {},
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PlayerManager.html#current": {
                          "ref": "PlayerManager.html#current",
                          "tf": 7.142857142857142
                        },
                        "PlayerManager.html#pause": {
                          "ref": "PlayerManager.html#pause",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Spotify.html#access_token": {
                        "ref": "Spotify.html#access_token",
                        "tf": 16.666666666666664
                      }
                    },
                    "_": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "k": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "n": {
                                "docs": {
                                  "Spotify.html#access_token": {
                                    "ref": "Spotify.html#access_token",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "v": {
                  "docs": {
                    "PlayerManager.html#resume": {
                      "ref": "PlayerManager.html#resume",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "g": {
            "docs": {},
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "TrackManager.html#recommendations": {
                          "ref": "TrackManager.html#recommendations",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "f": {
            "docs": {},
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "UserManager.html#top": {
                      "ref": "UserManager.html#top",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "index.html": {
                            "ref": "index.html",
                            "tf": 17.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "AudioManager.html#features": {
                        "ref": "AudioManager.html#features",
                        "tf": 5.555555555555555
                      },
                      "EpisodeManager.html#get": {
                        "ref": "EpisodeManager.html#get",
                        "tf": 5.555555555555555
                      },
                      "EpisodeManager.html#search": {
                        "ref": "EpisodeManager.html#search",
                        "tf": 12.5
                      },
                      "PlayerManager.html#state": {
                        "ref": "PlayerManager.html#state",
                        "tf": 10
                      },
                      "PlayerManager.html#devices": {
                        "ref": "PlayerManager.html#devices",
                        "tf": 12.5
                      },
                      "AlbumManager.html#get": {
                        "ref": "AlbumManager.html#get",
                        "tf": 10
                      },
                      "AlbumManager.html#tracks": {
                        "ref": "AlbumManager.html#tracks",
                        "tf": 10
                      },
                      "AlbumManager.html#search": {
                        "ref": "AlbumManager.html#search",
                        "tf": 12.5
                      },
                      "PlaylistManager.html#search": {
                        "ref": "PlaylistManager.html#search",
                        "tf": 12.5
                      },
                      "ShowManager.html#get": {
                        "ref": "ShowManager.html#get",
                        "tf": 5.555555555555555
                      },
                      "ShowManager.html#episodes": {
                        "ref": "ShowManager.html#episodes",
                        "tf": 10
                      },
                      "ShowManager.html#search": {
                        "ref": "ShowManager.html#search",
                        "tf": 12.5
                      },
                      "TrackManager.html#get": {
                        "ref": "TrackManager.html#get",
                        "tf": 5.555555555555555
                      },
                      "TrackManager.html#search": {
                        "ref": "TrackManager.html#search",
                        "tf": 12.5
                      },
                      "TrackManager.html#recommendations": {
                        "ref": "TrackManager.html#recommendations",
                        "tf": 3.8461538461538463
                      },
                      "ArtistManager.html#get": {
                        "ref": "ArtistManager.html#get",
                        "tf": 5.555555555555555
                      },
                      "ArtistManager.html#top": {
                        "ref": "ArtistManager.html#top",
                        "tf": 7.142857142857142
                      },
                      "ArtistManager.html#related": {
                        "ref": "ArtistManager.html#related",
                        "tf": 7.142857142857142
                      },
                      "ArtistManager.html#search": {
                        "ref": "ArtistManager.html#search",
                        "tf": 12.5
                      },
                      "UserManager.html#get": {
                        "ref": "UserManager.html#get",
                        "tf": 10
                      },
                      "UserManager.html#me": {
                        "ref": "UserManager.html#me",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "l": {
                "docs": {},
                "u": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "AudioManager.html#analysis": {
                        "ref": "AudioManager.html#analysis",
                        "tf": 2.7777777777777777
                      },
                      "UserManager.html#me": {
                        "ref": "UserManager.html#me",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "e": {
              "docs": {},
              "m": {
                "docs": {
                  "Base.html": {
                    "ref": "Base.html",
                    "tf": 8.333333333333332
                  },
                  "CategoryManager.html#get": {
                    "ref": "CategoryManager.html#get",
                    "tf": 8.333333333333332
                  },
                  "CategoryManager.html#all": {
                    "ref": "CategoryManager.html#all",
                    "tf": 8.333333333333332
                  },
                  "PlayerManager.html#queue": {
                    "ref": "PlayerManager.html#queue",
                    "tf": 7.142857142857142
                  },
                  "PlaylistManager.html#update": {
                    "ref": "PlaylistManager.html#update",
                    "tf": 7.142857142857142
                  },
                  "PlaylistManager.html#tracks": {
                    "ref": "PlaylistManager.html#tracks",
                    "tf": 7.142857142857142
                  },
                  "PlaylistManager.html#add": {
                    "ref": "PlaylistManager.html#add",
                    "tf": 8.333333333333332
                  },
                  "PlaylistManager.html#remove": {
                    "ref": "PlaylistManager.html#remove",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "AudioManager.html#features": {
                "ref": "AudioManager.html#features",
                "tf": 38.888888888888886
              },
              "AudioManager.html#analysis": {
                "ref": "AudioManager.html#analysis",
                "tf": 33.33333333333333
              },
              "CategoryManager.html#get": {
                "ref": "CategoryManager.html#get",
                "tf": 25
              },
              "EpisodeManager.html#get": {
                "ref": "EpisodeManager.html#get",
                "tf": 55.55555555555556
              },
              "EpisodeManager.html#save": {
                "ref": "EpisodeManager.html#save",
                "tf": 33.33333333333333
              },
              "EpisodeManager.html#remove": {
                "ref": "EpisodeManager.html#remove",
                "tf": 33.33333333333333
              },
              "EpisodeManager.html#starred": {
                "ref": "EpisodeManager.html#starred",
                "tf": 33.33333333333333
              },
              "PlayerManager.html#transfer": {
                "ref": "PlayerManager.html#transfer",
                "tf": 25
              },
              "AlbumManager.html#get": {
                "ref": "AlbumManager.html#get",
                "tf": 50
              },
              "AlbumManager.html#tracks": {
                "ref": "AlbumManager.html#tracks",
                "tf": 25
              },
              "AlbumManager.html#save": {
                "ref": "AlbumManager.html#save",
                "tf": 33.33333333333333
              },
              "AlbumManager.html#remove": {
                "ref": "AlbumManager.html#remove",
                "tf": 33.33333333333333
              },
              "AlbumManager.html#starred": {
                "ref": "AlbumManager.html#starred",
                "tf": 33.33333333333333
              },
              "PlaylistManager.html#get": {
                "ref": "PlaylistManager.html#get",
                "tf": 33.33333333333333
              },
              "PlaylistManager.html#modify": {
                "ref": "PlaylistManager.html#modify",
                "tf": 25
              },
              "PlaylistManager.html#update": {
                "ref": "PlaylistManager.html#update",
                "tf": 25
              },
              "PlaylistManager.html#tracks": {
                "ref": "PlaylistManager.html#tracks",
                "tf": 25
              },
              "PlaylistManager.html#add": {
                "ref": "PlaylistManager.html#add",
                "tf": 20
              },
              "PlaylistManager.html#remove": {
                "ref": "PlaylistManager.html#remove",
                "tf": 20
              },
              "PlaylistManager.html#users": {
                "ref": "PlaylistManager.html#users",
                "tf": 25
              },
              "PlaylistManager.html#follow": {
                "ref": "PlaylistManager.html#follow",
                "tf": 25
              },
              "PlaylistManager.html#unfollow": {
                "ref": "PlaylistManager.html#unfollow",
                "tf": 33.33333333333333
              },
              "PlaylistManager.html#followers": {
                "ref": "PlaylistManager.html#followers",
                "tf": 25
              },
              "PlaylistManager.html#create": {
                "ref": "PlaylistManager.html#create",
                "tf": 25
              },
              "PlaylistManager.html#categories": {
                "ref": "PlaylistManager.html#categories",
                "tf": 25
              },
              "PlaylistManager.html#cover": {
                "ref": "PlaylistManager.html#cover",
                "tf": 25
              },
              "ShowManager.html#get": {
                "ref": "ShowManager.html#get",
                "tf": 55.55555555555556
              },
              "ShowManager.html#episodes": {
                "ref": "ShowManager.html#episodes",
                "tf": 25
              },
              "ShowManager.html#save": {
                "ref": "ShowManager.html#save",
                "tf": 33.33333333333333
              },
              "ShowManager.html#remove": {
                "ref": "ShowManager.html#remove",
                "tf": 33.33333333333333
              },
              "ShowManager.html#starred": {
                "ref": "ShowManager.html#starred",
                "tf": 33.33333333333333
              },
              "TrackManager.html#get": {
                "ref": "TrackManager.html#get",
                "tf": 55.55555555555556
              },
              "TrackManager.html#save": {
                "ref": "TrackManager.html#save",
                "tf": 33.33333333333333
              },
              "TrackManager.html#remove": {
                "ref": "TrackManager.html#remove",
                "tf": 33.33333333333333
              },
              "TrackManager.html#starred": {
                "ref": "TrackManager.html#starred",
                "tf": 33.33333333333333
              },
              "ArtistManager.html#get": {
                "ref": "ArtistManager.html#get",
                "tf": 55.55555555555556
              },
              "ArtistManager.html#follow": {
                "ref": "ArtistManager.html#follow",
                "tf": 33.33333333333333
              },
              "ArtistManager.html#unfollow": {
                "ref": "ArtistManager.html#unfollow",
                "tf": 33.33333333333333
              },
              "ArtistManager.html#following": {
                "ref": "ArtistManager.html#following",
                "tf": 25
              },
              "ArtistManager.html#top": {
                "ref": "ArtistManager.html#top",
                "tf": 25
              },
              "ArtistManager.html#related": {
                "ref": "ArtistManager.html#related",
                "tf": 33.33333333333333
              },
              "UserManager.html#get": {
                "ref": "UserManager.html#get",
                "tf": 50
              },
              "UserManager.html#follow": {
                "ref": "UserManager.html#follow",
                "tf": 33.33333333333333
              },
              "UserManager.html#unfollow": {
                "ref": "UserManager.html#unfollow",
                "tf": 33.33333333333333
              },
              "UserManager.html#following": {
                "ref": "UserManager.html#following",
                "tf": 25
              }
            },
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "AudioManager.html#features": {
                            "ref": "AudioManager.html#features",
                            "tf": 5.555555555555555
                          },
                          "EpisodeManager.html#get": {
                            "ref": "EpisodeManager.html#get",
                            "tf": 5.555555555555555
                          },
                          "ShowManager.html#get": {
                            "ref": "ShowManager.html#get",
                            "tf": 5.555555555555555
                          },
                          "TrackManager.html#get": {
                            "ref": "TrackManager.html#get",
                            "tf": 5.555555555555555
                          },
                          "ArtistManager.html#get": {
                            "ref": "ArtistManager.html#get",
                            "tf": 5.555555555555555
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "g": {
                "docs": {
                  "Playlist.html#cover": {
                    "ref": "Playlist.html#cover",
                    "tf": 33.33333333333333
                  },
                  "PlaylistManager.html#cover": {
                    "ref": "PlaylistManager.html#cover",
                    "tf": 35
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "b": {
              "docs": {},
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 17.5
                        },
                        "Album.html#starred": {
                          "ref": "Album.html#starred",
                          "tf": 6.25
                        },
                        "Episode.html#starred": {
                          "ref": "Episode.html#starred",
                          "tf": 6.25
                        },
                        "Show.html#starred": {
                          "ref": "Show.html#starred",
                          "tf": 6.25
                        },
                        "Track.html#starred": {
                          "ref": "Track.html#starred",
                          "tf": 5.555555555555555
                        },
                        "EpisodeManager.html#users": {
                          "ref": "EpisodeManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#save": {
                          "ref": "EpisodeManager.html#save",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#remove": {
                          "ref": "EpisodeManager.html#remove",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#starred": {
                          "ref": "EpisodeManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "AlbumManager.html#saved": {
                          "ref": "AlbumManager.html#saved",
                          "tf": 6.25
                        },
                        "AlbumManager.html#save": {
                          "ref": "AlbumManager.html#save",
                          "tf": 6.25
                        },
                        "AlbumManager.html#remove": {
                          "ref": "AlbumManager.html#remove",
                          "tf": 6.25
                        },
                        "AlbumManager.html#starred": {
                          "ref": "AlbumManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "ShowManager.html#users": {
                          "ref": "ShowManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "ShowManager.html#save": {
                          "ref": "ShowManager.html#save",
                          "tf": 6.25
                        },
                        "ShowManager.html#remove": {
                          "ref": "ShowManager.html#remove",
                          "tf": 6.25
                        },
                        "ShowManager.html#starred": {
                          "ref": "ShowManager.html#starred",
                          "tf": 5
                        },
                        "TrackManager.html#saved": {
                          "ref": "TrackManager.html#saved",
                          "tf": 6.25
                        },
                        "TrackManager.html#save": {
                          "ref": "TrackManager.html#save",
                          "tf": 6.25
                        },
                        "TrackManager.html#remove": {
                          "ref": "TrackManager.html#remove",
                          "tf": 6.25
                        },
                        "TrackManager.html#starred": {
                          "ref": "TrackManager.html#starred",
                          "tf": 4.545454545454546
                        }
                      }
                    },
                    "y": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "j": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 300
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "CategoryManager.html#all": {
                    "ref": "CategoryManager.html#all",
                    "tf": 8.333333333333332
                  },
                  "EpisodeManager.html#users": {
                    "ref": "EpisodeManager.html#users",
                    "tf": 7.142857142857142
                  },
                  "AlbumManager.html#saved": {
                    "ref": "AlbumManager.html#saved",
                    "tf": 6.25
                  },
                  "AlbumManager.html#releases": {
                    "ref": "AlbumManager.html#releases",
                    "tf": 8.333333333333332
                  },
                  "PlaylistManager.html#users": {
                    "ref": "PlaylistManager.html#users",
                    "tf": 7.142857142857142
                  },
                  "PlaylistManager.html#featured": {
                    "ref": "PlaylistManager.html#featured",
                    "tf": 12.5
                  },
                  "PlaylistManager.html#categories": {
                    "ref": "PlaylistManager.html#categories",
                    "tf": 8.333333333333332
                  },
                  "ShowManager.html#users": {
                    "ref": "ShowManager.html#users",
                    "tf": 7.142857142857142
                  },
                  "TrackManager.html#saved": {
                    "ref": "TrackManager.html#saved",
                    "tf": 6.25
                  },
                  "Spotify.html#genres": {
                    "ref": "Spotify.html#genres",
                    "tf": 10
                  },
                  "Spotify.html#markets": {
                    "ref": "Spotify.html#markets",
                    "tf": 12.5
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "AudioManager.html#analysis": {
                      "ref": "AudioManager.html#analysis",
                      "tf": 2.7777777777777777
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "w": {
              "docs": {
                "AudioManager.html#analysis": {
                  "ref": "AudioManager.html#analysis",
                  "tf": 2.7777777777777777
                }
              }
            },
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "CategoryManager.html#get": {
                      "ref": "CategoryManager.html#get",
                      "tf": 25
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "HTTPError.html#response": {
                          "ref": "HTTPError.html#response",
                          "tf": 708.3333333333334
                        },
                        "ApiError.html#error": {
                          "ref": "ApiError.html#error",
                          "tf": 16.666666666666664
                        },
                        "Util.html#toJson": {
                          "ref": "Util.html#toJson",
                          "tf": 45.83333333333333
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "m": {
                  "docs": {
                    "PlayerManager.html#resume": {
                      "ref": "PlayerManager.html#resume",
                      "tf": 691.6666666666667
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Album.html": {
                        "ref": "Album.html",
                        "tf": 25
                      },
                      "Artist.html": {
                        "ref": "Artist.html",
                        "tf": 25
                      },
                      "Audio.html": {
                        "ref": "Audio.html",
                        "tf": 16.666666666666664
                      },
                      "Episode.html": {
                        "ref": "Episode.html",
                        "tf": 25
                      },
                      "User.html": {
                        "ref": "User.html",
                        "tf": 25
                      },
                      "Playlist.html": {
                        "ref": "Playlist.html",
                        "tf": 25
                      },
                      "Show.html": {
                        "ref": "Show.html",
                        "tf": 25
                      },
                      "Track.html": {
                        "ref": "Track.html",
                        "tf": 25
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "PlayerManager.html#repeat": {
                        "ref": "PlayerManager.html#repeat",
                        "tf": 690
                      }
                    }
                  }
                }
              },
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "PlaylistManager.html#update": {
                        "ref": "PlaylistManager.html#update",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "Album.html#remove": {
                      "ref": "Album.html#remove",
                      "tf": 716.6666666666666
                    },
                    "Episode.html#remove": {
                      "ref": "Episode.html#remove",
                      "tf": 716.6666666666666
                    },
                    "Playlist.html#remove": {
                      "ref": "Playlist.html#remove",
                      "tf": 687.5
                    },
                    "Show.html#remove": {
                      "ref": "Show.html#remove",
                      "tf": 716.6666666666666
                    },
                    "Track.html#remove": {
                      "ref": "Track.html#remove",
                      "tf": 716.6666666666666
                    },
                    "EpisodeManager.html#remove": {
                      "ref": "EpisodeManager.html#remove",
                      "tf": 690.4761904761905
                    },
                    "AlbumManager.html#remove": {
                      "ref": "AlbumManager.html#remove",
                      "tf": 689.5833333333334
                    },
                    "PlaylistManager.html#remove": {
                      "ref": "PlaylistManager.html#remove",
                      "tf": 678.3333333333334
                    },
                    "PlaylistManager.html#unfollow": {
                      "ref": "PlaylistManager.html#unfollow",
                      "tf": 10
                    },
                    "ShowManager.html#remove": {
                      "ref": "ShowManager.html#remove",
                      "tf": 683.3333333333334
                    },
                    "TrackManager.html#remove": {
                      "ref": "TrackManager.html#remove",
                      "tf": 689.5833333333334
                    },
                    "ArtistManager.html#unfollow": {
                      "ref": "ArtistManager.html#unfollow",
                      "tf": 7.142857142857142
                    },
                    "UserManager.html#unfollow": {
                      "ref": "UserManager.html#unfollow",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Artist.html#related": {
                      "ref": "Artist.html#related",
                      "tf": 716.6666666666666
                    },
                    "ArtistManager.html#related": {
                      "ref": "ArtistManager.html#related",
                      "tf": 683.3333333333334
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "AlbumManager.html#releases": {
                        "ref": "AlbumManager.html#releases",
                        "tf": 691.6666666666667
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "PlayerManager.html#recent": {
                        "ref": "PlayerManager.html#recent",
                        "tf": 687.5
                      }
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "m": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "TrackManager.html#recommendations": {
                              "ref": "TrackManager.html#recommendations",
                              "tf": 687.1794871794872
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "r": {
                "docs": {},
                "d": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "PlaylistManager.html#update": {
                          "ref": "PlaylistManager.html#update",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "'": {
                        "docs": {
                          "PlaylistManager.html#update": {
                            "ref": "PlaylistManager.html#update",
                            "tf": 7.142857142857142
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Spotify.html#refresher": {
                          "ref": "Spotify.html#refresher",
                          "tf": 710
                        }
                      },
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "|": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Spotify.html#refresher": {
                                      "ref": "Spotify.html#refresher",
                                      "tf": 50
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "v": {
                      "docs": {
                        "Spotify.html#genres": {
                          "ref": "Spotify.html#genres",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "y": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "AudioManager.html#analysis": {
                        "ref": "AudioManager.html#analysis",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "p": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 300
                        },
                        "Util.html": {
                          "ref": "Util.html",
                          "tf": 16.666666666666664
                        },
                        "Util.html#spotify": {
                          "ref": "Util.html#spotify",
                          "tf": 775
                        },
                        "AudioManager.html": {
                          "ref": "AudioManager.html",
                          "tf": 16.666666666666664
                        },
                        "AudioManager.html#spotify": {
                          "ref": "AudioManager.html#spotify",
                          "tf": 775
                        },
                        "AudioManager.html#features": {
                          "ref": "AudioManager.html#features",
                          "tf": 5.555555555555555
                        },
                        "AudioManager.html#analysis": {
                          "ref": "AudioManager.html#analysis",
                          "tf": 2.7777777777777777
                        },
                        "Album.html#spotify": {
                          "ref": "Album.html#spotify",
                          "tf": 775
                        },
                        "Album.html#starred": {
                          "ref": "Album.html#starred",
                          "tf": 6.25
                        },
                        "Artist.html#spotify": {
                          "ref": "Artist.html#spotify",
                          "tf": 775
                        },
                        "Audio.html#spotify": {
                          "ref": "Audio.html#spotify",
                          "tf": 775
                        },
                        "Episode.html#spotify": {
                          "ref": "Episode.html#spotify",
                          "tf": 775
                        },
                        "Episode.html#starred": {
                          "ref": "Episode.html#starred",
                          "tf": 6.25
                        },
                        "User.html#spotify": {
                          "ref": "User.html#spotify",
                          "tf": 775
                        },
                        "Playlist.html#spotify": {
                          "ref": "Playlist.html#spotify",
                          "tf": 775
                        },
                        "Show.html#spotify": {
                          "ref": "Show.html#spotify",
                          "tf": 775
                        },
                        "Show.html#starred": {
                          "ref": "Show.html#starred",
                          "tf": 6.25
                        },
                        "CategoryManager.html": {
                          "ref": "CategoryManager.html",
                          "tf": 16.666666666666664
                        },
                        "CategoryManager.html#spotify": {
                          "ref": "CategoryManager.html#spotify",
                          "tf": 775
                        },
                        "CategoryManager.html#get": {
                          "ref": "CategoryManager.html#get",
                          "tf": 8.333333333333332
                        },
                        "CategoryManager.html#all": {
                          "ref": "CategoryManager.html#all",
                          "tf": 8.333333333333332
                        },
                        "Track.html#spotify": {
                          "ref": "Track.html#spotify",
                          "tf": 775
                        },
                        "Track.html#starred": {
                          "ref": "Track.html#starred",
                          "tf": 5.555555555555555
                        },
                        "EpisodeManager.html": {
                          "ref": "EpisodeManager.html",
                          "tf": 16.666666666666664
                        },
                        "EpisodeManager.html#spotify": {
                          "ref": "EpisodeManager.html#spotify",
                          "tf": 775
                        },
                        "EpisodeManager.html#get": {
                          "ref": "EpisodeManager.html#get",
                          "tf": 11.11111111111111
                        },
                        "EpisodeManager.html#users": {
                          "ref": "EpisodeManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#starred": {
                          "ref": "EpisodeManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "EpisodeManager.html#search": {
                          "ref": "EpisodeManager.html#search",
                          "tf": 12.5
                        },
                        "PlayerManager.html": {
                          "ref": "PlayerManager.html",
                          "tf": 16.666666666666664
                        },
                        "PlayerManager.html#spotify": {
                          "ref": "PlayerManager.html#spotify",
                          "tf": 775
                        },
                        "PlayerManager.html#current": {
                          "ref": "PlayerManager.html#current",
                          "tf": 7.142857142857142
                        },
                        "AlbumManager.html": {
                          "ref": "AlbumManager.html",
                          "tf": 16.666666666666664
                        },
                        "AlbumManager.html#spotify": {
                          "ref": "AlbumManager.html#spotify",
                          "tf": 775
                        },
                        "AlbumManager.html#get": {
                          "ref": "AlbumManager.html#get",
                          "tf": 10
                        },
                        "AlbumManager.html#tracks": {
                          "ref": "AlbumManager.html#tracks",
                          "tf": 10
                        },
                        "AlbumManager.html#saved": {
                          "ref": "AlbumManager.html#saved",
                          "tf": 6.25
                        },
                        "AlbumManager.html#starred": {
                          "ref": "AlbumManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "AlbumManager.html#releases": {
                          "ref": "AlbumManager.html#releases",
                          "tf": 8.333333333333332
                        },
                        "AlbumManager.html#search": {
                          "ref": "AlbumManager.html#search",
                          "tf": 12.5
                        },
                        "PlaylistManager.html": {
                          "ref": "PlaylistManager.html",
                          "tf": 16.666666666666664
                        },
                        "PlaylistManager.html#spotify": {
                          "ref": "PlaylistManager.html#spotify",
                          "tf": 775
                        },
                        "PlaylistManager.html#get": {
                          "ref": "PlaylistManager.html#get",
                          "tf": 12.5
                        },
                        "PlaylistManager.html#tracks": {
                          "ref": "PlaylistManager.html#tracks",
                          "tf": 7.142857142857142
                        },
                        "PlaylistManager.html#users": {
                          "ref": "PlaylistManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "PlaylistManager.html#followers": {
                          "ref": "PlaylistManager.html#followers",
                          "tf": 5.555555555555555
                        },
                        "PlaylistManager.html#create": {
                          "ref": "PlaylistManager.html#create",
                          "tf": 12.5
                        },
                        "PlaylistManager.html#featured": {
                          "ref": "PlaylistManager.html#featured",
                          "tf": 12.5
                        },
                        "PlaylistManager.html#categories": {
                          "ref": "PlaylistManager.html#categories",
                          "tf": 8.333333333333332
                        },
                        "PlaylistManager.html#search": {
                          "ref": "PlaylistManager.html#search",
                          "tf": 12.5
                        },
                        "ShowManager.html": {
                          "ref": "ShowManager.html",
                          "tf": 16.666666666666664
                        },
                        "ShowManager.html#spotify": {
                          "ref": "ShowManager.html#spotify",
                          "tf": 775
                        },
                        "ShowManager.html#get": {
                          "ref": "ShowManager.html#get",
                          "tf": 11.11111111111111
                        },
                        "ShowManager.html#episodes": {
                          "ref": "ShowManager.html#episodes",
                          "tf": 10
                        },
                        "ShowManager.html#users": {
                          "ref": "ShowManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "ShowManager.html#save": {
                          "ref": "ShowManager.html#save",
                          "tf": 6.25
                        },
                        "ShowManager.html#remove": {
                          "ref": "ShowManager.html#remove",
                          "tf": 6.25
                        },
                        "ShowManager.html#starred": {
                          "ref": "ShowManager.html#starred",
                          "tf": 5
                        },
                        "ShowManager.html#search": {
                          "ref": "ShowManager.html#search",
                          "tf": 12.5
                        },
                        "TrackManager.html": {
                          "ref": "TrackManager.html",
                          "tf": 16.666666666666664
                        },
                        "TrackManager.html#spotify": {
                          "ref": "TrackManager.html#spotify",
                          "tf": 775
                        },
                        "TrackManager.html#get": {
                          "ref": "TrackManager.html#get",
                          "tf": 11.11111111111111
                        },
                        "TrackManager.html#saved": {
                          "ref": "TrackManager.html#saved",
                          "tf": 6.25
                        },
                        "TrackManager.html#starred": {
                          "ref": "TrackManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "TrackManager.html#search": {
                          "ref": "TrackManager.html#search",
                          "tf": 12.5
                        },
                        "ArtistManager.html": {
                          "ref": "ArtistManager.html",
                          "tf": 16.666666666666664
                        },
                        "ArtistManager.html#spotify": {
                          "ref": "ArtistManager.html#spotify",
                          "tf": 775
                        },
                        "ArtistManager.html#get": {
                          "ref": "ArtistManager.html#get",
                          "tf": 11.11111111111111
                        },
                        "ArtistManager.html#top": {
                          "ref": "ArtistManager.html#top",
                          "tf": 7.142857142857142
                        },
                        "ArtistManager.html#related": {
                          "ref": "ArtistManager.html#related",
                          "tf": 7.142857142857142
                        },
                        "ArtistManager.html#search": {
                          "ref": "ArtistManager.html#search",
                          "tf": 12.5
                        },
                        "UserManager.html": {
                          "ref": "UserManager.html",
                          "tf": 16.666666666666664
                        },
                        "UserManager.html#spotify": {
                          "ref": "UserManager.html#spotify",
                          "tf": 775
                        },
                        "UserManager.html#get": {
                          "ref": "UserManager.html#get",
                          "tf": 10
                        },
                        "Spotify.html": {
                          "ref": "Spotify.html",
                          "tf": 1925
                        },
                        "Spotify.html#util": {
                          "ref": "Spotify.html#util",
                          "tf": 16.666666666666664
                        },
                        "Spotify.html#refresher": {
                          "ref": "Spotify.html#refresher",
                          "tf": 10
                        },
                        "Spotify.html#markets": {
                          "ref": "Spotify.html#markets",
                          "tf": 12.5
                        },
                        "Spotify.html#set": {
                          "ref": "Spotify.html#set",
                          "tf": 12.5
                        }
                      }
                    },
                    "y": {
                      "docs": {},
                      "'": {
                        "docs": {
                          "index.html": {
                            "ref": "index.html",
                            "tf": 17.5
                          },
                          "Util.html#fetch": {
                            "ref": "Util.html#fetch",
                            "tf": 16.666666666666664
                          }
                        }
                      },
                      "#": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "_": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "k": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "n": {
                                                "docs": {
                                                  "Spotify.html#access_token": {
                                                    "ref": "Spotify.html#access_token",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "l": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "m": {
                                  "docs": {
                                    "Spotify.html#albums": {
                                      "ref": "Spotify.html#albums",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Spotify.html#artists": {
                                        "ref": "Spotify.html#artists",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "u": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "Spotify.html#util": {
                                    "ref": "Spotify.html#util",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          },
                          "s": {
                            "docs": {
                              "Spotify.html#users": {
                                "ref": "Spotify.html#users",
                                "tf": 1150
                              }
                            }
                          }
                        },
                        "p": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {
                                  "Spotify.html#player": {
                                    "ref": "Spotify.html#player",
                                    "tf": 1150
                                  }
                                },
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Spotify.html#playlists": {
                                            "ref": "Spotify.html#playlists",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "k": {
                                  "docs": {
                                    "Spotify.html#tracks": {
                                      "ref": "Spotify.html#tracks",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Spotify.html#episodes": {
                                        "ref": "Spotify.html#episodes",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "w": {
                                "docs": {
                                  "Spotify.html#shows": {
                                    "ref": "Spotify.html#shows",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          },
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Spotify.html#set": {
                                  "ref": "Spotify.html#set",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        },
                        "c": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {
                                          "Spotify.html#categories": {
                                            "ref": "Spotify.html#categories",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "h": {
                                      "docs": {
                                        "Spotify.html#refresher": {
                                          "ref": "Spotify.html#refresher",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "g": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "r": {
                                "docs": {
                                  "Spotify.html#genres": {
                                    "ref": "Spotify.html#genres",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "k": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Spotify.html#markets": {
                                        "ref": "Spotify.html#markets",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "PlaylistManager.html#cover": {
                        "ref": "PlaylistManager.html#cover",
                        "tf": 10
                      }
                    },
                    "i": {
                      "docs": {
                        "PlaylistManager.html#followers": {
                          "ref": "PlaylistManager.html#followers",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "r": {
              "docs": {},
              "u": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Base.html": {
                            "ref": "Base.html",
                            "tf": 8.333333333333332
                          },
                          "AudioManager.html#analysis": {
                            "ref": "AudioManager.html#analysis",
                            "tf": 2.7777777777777777
                          }
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Spotify.html#access_token": {
                        "ref": "Spotify.html#access_token",
                        "tf": 50
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "u": {
                  "docs": {
                    "ApiError.html#error": {
                      "ref": "ApiError.html#error",
                      "tf": 16.666666666666664
                    }
                  },
                  "s": {
                    "docs": {},
                    "|": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "|": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {
                                                            "PlaylistManager.html#update": {
                                                              "ref": "PlaylistManager.html#update",
                                                              "tf": 25
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {
                    "PlayerManager.html#state": {
                      "ref": "PlayerManager.html#state",
                      "tf": 693.3333333333334
                    },
                    "PlayerManager.html#repeat": {
                      "ref": "PlayerManager.html#repeat",
                      "tf": 25
                    },
                    "PlayerManager.html#shuffle": {
                      "ref": "PlayerManager.html#shuffle",
                      "tf": 25
                    },
                    "PlaylistManager.html#modify": {
                      "ref": "PlaylistManager.html#modify",
                      "tf": 6.25
                    },
                    "PlaylistManager.html#follow": {
                      "ref": "PlaylistManager.html#follow",
                      "tf": 25
                    }
                  }
                }
              },
              "r": {
                "docs": {
                  "Album.html#starred": {
                    "ref": "Album.html#starred",
                    "tf": 700
                  },
                  "Episode.html#starred": {
                    "ref": "Episode.html#starred",
                    "tf": 700
                  },
                  "Show.html#starred": {
                    "ref": "Show.html#starred",
                    "tf": 700
                  },
                  "Track.html#starred": {
                    "ref": "Track.html#starred",
                    "tf": 700
                  },
                  "EpisodeManager.html#starred": {
                    "ref": "EpisodeManager.html#starred",
                    "tf": 683.3333333333334
                  },
                  "AlbumManager.html#starred": {
                    "ref": "AlbumManager.html#starred",
                    "tf": 683.3333333333334
                  },
                  "ShowManager.html#starred": {
                    "ref": "ShowManager.html#starred",
                    "tf": 683.3333333333334
                  },
                  "TrackManager.html#starred": {
                    "ref": "TrackManager.html#starred",
                    "tf": 683.3333333333334
                  }
                },
                "t": {
                  "docs": {
                    "PlayerManager.html#transfer": {
                      "ref": "PlayerManager.html#transfer",
                      "tf": 7.142857142857142
                    },
                    "PlayerManager.html#start": {
                      "ref": "PlayerManager.html#start",
                      "tf": 691.6666666666666
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "e": {
              "docs": {
                "Util.html#toJson": {
                  "ref": "Util.html#toJson",
                  "tf": 12.5
                },
                "PlaylistManager.html#followers": {
                  "ref": "PlaylistManager.html#followers",
                  "tf": 5.555555555555555
                },
                "ArtistManager.html#following": {
                  "ref": "ArtistManager.html#following",
                  "tf": 6.25
                },
                "UserManager.html#following": {
                  "ref": "UserManager.html#following",
                  "tf": 6.25
                }
              },
              "k": {
                "docs": {
                  "PlayerManager.html#seek": {
                    "ref": "PlayerManager.html#seek",
                    "tf": 682.1428571428571
                  }
                }
              },
              "d": {
                "docs": {
                  "TrackManager.html#recommendations": {
                    "ref": "TrackManager.html#recommendations",
                    "tf": 3.8461538461538463
                  },
                  "Spotify.html#genres": {
                    "ref": "Spotify.html#genres",
                    "tf": 10
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "EpisodeManager.html#search": {
                        "ref": "EpisodeManager.html#search",
                        "tf": 675
                      },
                      "AlbumManager.html#search": {
                        "ref": "AlbumManager.html#search",
                        "tf": 675
                      },
                      "PlaylistManager.html#search": {
                        "ref": "PlaylistManager.html#search",
                        "tf": 675
                      },
                      "ShowManager.html#search": {
                        "ref": "ShowManager.html#search",
                        "tf": 675
                      },
                      "TrackManager.html#search": {
                        "ref": "TrackManager.html#search",
                        "tf": 675
                      },
                      "ArtistManager.html#search": {
                        "ref": "ArtistManager.html#search",
                        "tf": 675
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {
                "PlayerManager.html#repeat": {
                  "ref": "PlayerManager.html#repeat",
                  "tf": 5
                },
                "PlayerManager.html#volume": {
                  "ref": "PlayerManager.html#volume",
                  "tf": 8.333333333333332
                },
                "Spotify.html#set": {
                  "ref": "Spotify.html#set",
                  "tf": 687.5
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "l": {
                  "docs": {
                    "AudioManager.html#features": {
                      "ref": "AudioManager.html#features",
                      "tf": 5.555555555555555
                    },
                    "CategoryManager.html#get": {
                      "ref": "CategoryManager.html#get",
                      "tf": 8.333333333333332
                    },
                    "EpisodeManager.html#get": {
                      "ref": "EpisodeManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "AlbumManager.html#get": {
                      "ref": "AlbumManager.html#get",
                      "tf": 10
                    },
                    "ShowManager.html#get": {
                      "ref": "ShowManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "TrackManager.html#get": {
                      "ref": "TrackManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "ArtistManager.html#get": {
                      "ref": "ArtistManager.html#get",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "TrackManager.html#recommendations": {
                          "ref": "TrackManager.html#recommendations",
                          "tf": 3.8461538461538463
                        },
                        "ArtistManager.html#related": {
                          "ref": "ArtistManager.html#related",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "o": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Album.html#play": {
                            "ref": "Album.html#play",
                            "tf": 16.666666666666664
                          },
                          "Album.html#save": {
                            "ref": "Album.html#save",
                            "tf": 16.666666666666664
                          },
                          "Album.html#remove": {
                            "ref": "Album.html#remove",
                            "tf": 16.666666666666664
                          },
                          "Album.html#starred": {
                            "ref": "Album.html#starred",
                            "tf": 6.25
                          },
                          "Artist.html#albums": {
                            "ref": "Artist.html#albums",
                            "tf": 16.666666666666664
                          },
                          "Artist.html#follow": {
                            "ref": "Artist.html#follow",
                            "tf": 16.666666666666664
                          },
                          "Artist.html#unfollow": {
                            "ref": "Artist.html#unfollow",
                            "tf": 16.666666666666664
                          },
                          "Artist.html#following": {
                            "ref": "Artist.html#following",
                            "tf": 8.333333333333332
                          },
                          "Artist.html#top": {
                            "ref": "Artist.html#top",
                            "tf": 12.5
                          },
                          "Artist.html#related": {
                            "ref": "Artist.html#related",
                            "tf": 16.666666666666664
                          },
                          "Audio.html#features": {
                            "ref": "Audio.html#features",
                            "tf": 12.5
                          },
                          "Audio.html#analysis": {
                            "ref": "Audio.html#analysis",
                            "tf": 12.5
                          },
                          "Episode.html#save": {
                            "ref": "Episode.html#save",
                            "tf": 16.666666666666664
                          },
                          "Episode.html#remove": {
                            "ref": "Episode.html#remove",
                            "tf": 16.666666666666664
                          },
                          "Episode.html#starred": {
                            "ref": "Episode.html#starred",
                            "tf": 6.25
                          },
                          "Episode.html#queue": {
                            "ref": "Episode.html#queue",
                            "tf": 16.666666666666664
                          },
                          "User.html#follow": {
                            "ref": "User.html#follow",
                            "tf": 16.666666666666664
                          },
                          "User.html#unfollow": {
                            "ref": "User.html#unfollow",
                            "tf": 16.666666666666664
                          },
                          "User.html#following": {
                            "ref": "User.html#following",
                            "tf": 8.333333333333332
                          },
                          "Playlist.html#play": {
                            "ref": "Playlist.html#play",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#modify": {
                            "ref": "Playlist.html#modify",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#add": {
                            "ref": "Playlist.html#add",
                            "tf": 12.5
                          },
                          "Playlist.html#remove": {
                            "ref": "Playlist.html#remove",
                            "tf": 12.5
                          },
                          "Playlist.html#follow": {
                            "ref": "Playlist.html#follow",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#unfollow": {
                            "ref": "Playlist.html#unfollow",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#following": {
                            "ref": "Playlist.html#following",
                            "tf": 10
                          },
                          "Playlist.html#cover": {
                            "ref": "Playlist.html#cover",
                            "tf": 10
                          },
                          "Show.html#play": {
                            "ref": "Show.html#play",
                            "tf": 16.666666666666664
                          },
                          "Show.html#save": {
                            "ref": "Show.html#save",
                            "tf": 16.666666666666664
                          },
                          "Show.html#remove": {
                            "ref": "Show.html#remove",
                            "tf": 16.666666666666664
                          },
                          "Show.html#starred": {
                            "ref": "Show.html#starred",
                            "tf": 6.25
                          },
                          "Track.html#audio": {
                            "ref": "Track.html#audio",
                            "tf": 16.666666666666664
                          },
                          "Track.html#save": {
                            "ref": "Track.html#save",
                            "tf": 16.666666666666664
                          },
                          "Track.html#remove": {
                            "ref": "Track.html#remove",
                            "tf": 16.666666666666664
                          },
                          "Track.html#starred": {
                            "ref": "Track.html#starred",
                            "tf": 5.555555555555555
                          },
                          "Track.html#queue": {
                            "ref": "Track.html#queue",
                            "tf": 16.666666666666664
                          }
                        }
                      }
                    }
                  }
                }
              },
              "w": {
                "docs": {
                  "Show.html": {
                    "ref": "Show.html",
                    "tf": 1925
                  },
                  "Show.html#play": {
                    "ref": "Show.html#play",
                    "tf": 16.666666666666664
                  },
                  "Show.html#save": {
                    "ref": "Show.html#save",
                    "tf": 16.666666666666664
                  },
                  "Show.html#remove": {
                    "ref": "Show.html#remove",
                    "tf": 16.666666666666664
                  },
                  "Show.html#starred": {
                    "ref": "Show.html#starred",
                    "tf": 6.25
                  },
                  "ShowManager.html#get": {
                    "ref": "ShowManager.html#get",
                    "tf": 5.555555555555555
                  },
                  "ShowManager.html#users": {
                    "ref": "ShowManager.html#users",
                    "tf": 7.142857142857142
                  },
                  "ShowManager.html#save": {
                    "ref": "ShowManager.html#save",
                    "tf": 6.25
                  },
                  "ShowManager.html#remove": {
                    "ref": "ShowManager.html#remove",
                    "tf": 6.25
                  },
                  "ShowManager.html#starred": {
                    "ref": "ShowManager.html#starred",
                    "tf": 5
                  },
                  "ShowManager.html#search": {
                    "ref": "ShowManager.html#search",
                    "tf": 12.5
                  },
                  "Spotify.html#shows": {
                    "ref": "Spotify.html#shows",
                    "tf": 725
                  }
                },
                "#": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Show.html#spotify": {
                                    "ref": "Show.html#spotify",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "v": {
                        "docs": {
                          "Show.html#save": {
                            "ref": "Show.html#save",
                            "tf": 1150
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "Show.html#starred": {
                              "ref": "Show.html#starred",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    }
                  },
                  "p": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "y": {
                          "docs": {
                            "Show.html#play": {
                              "ref": "Show.html#play",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    }
                  },
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "v": {
                            "docs": {
                              "Show.html#remove": {
                                "ref": "Show.html#remove",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "g": {
                          "docs": {
                            "ShowManager.html": {
                              "ref": "ShowManager.html",
                              "tf": 1900
                            },
                            "Spotify.html#episodes": {
                              "ref": "Spotify.html#episodes",
                              "tf": 50
                            },
                            "Spotify.html#shows": {
                              "ref": "Spotify.html#shows",
                              "tf": 50
                            }
                          },
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "#": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "f": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "ShowManager.html#spotify": {
                                                  "ref": "ShowManager.html#spotify",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "a": {
                                    "docs": {},
                                    "v": {
                                      "docs": {
                                        "ShowManager.html#save": {
                                          "ref": "ShowManager.html#save",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  },
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "ShowManager.html#starred": {
                                            "ref": "ShowManager.html#starred",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "h": {
                                            "docs": {
                                              "ShowManager.html#search": {
                                                "ref": "ShowManager.html#search",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "g": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "ShowManager.html#get": {
                                          "ref": "ShowManager.html#get",
                                          "tf": 1300
                                        }
                                      }
                                    }
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "d": {
                                            "docs": {
                                              "ShowManager.html#episodes": {
                                                "ref": "ShowManager.html#episodes",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "u": {
                                  "docs": {},
                                  "s": {
                                    "docs": {
                                      "ShowManager.html#users": {
                                        "ref": "ShowManager.html#users",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                },
                                "r": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "v": {
                                          "docs": {
                                            "ShowManager.html#remove": {
                                              "ref": "ShowManager.html#remove",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "’": {
                  "docs": {
                    "ShowManager.html#episodes": {
                      "ref": "ShowManager.html#episodes",
                      "tf": 10
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "f": {
                "docs": {},
                "f": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "PlayerManager.html#shuffle": {
                        "ref": "PlayerManager.html#shuffle",
                        "tf": 687.5
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Album.html#save": {
                    "ref": "Album.html#save",
                    "tf": 716.6666666666666
                  },
                  "Album.html#starred": {
                    "ref": "Album.html#starred",
                    "tf": 6.25
                  },
                  "Episode.html#save": {
                    "ref": "Episode.html#save",
                    "tf": 716.6666666666666
                  },
                  "Episode.html#starred": {
                    "ref": "Episode.html#starred",
                    "tf": 6.25
                  },
                  "Show.html#save": {
                    "ref": "Show.html#save",
                    "tf": 716.6666666666666
                  },
                  "Show.html#starred": {
                    "ref": "Show.html#starred",
                    "tf": 6.25
                  },
                  "Track.html#save": {
                    "ref": "Track.html#save",
                    "tf": 716.6666666666666
                  },
                  "Track.html#starred": {
                    "ref": "Track.html#starred",
                    "tf": 5.555555555555555
                  },
                  "EpisodeManager.html#users": {
                    "ref": "EpisodeManager.html#users",
                    "tf": 7.142857142857142
                  },
                  "EpisodeManager.html#save": {
                    "ref": "EpisodeManager.html#save",
                    "tf": 690.4761904761905
                  },
                  "EpisodeManager.html#starred": {
                    "ref": "EpisodeManager.html#starred",
                    "tf": 4.545454545454546
                  },
                  "AlbumManager.html#saved": {
                    "ref": "AlbumManager.html#saved",
                    "tf": 689.5833333333334
                  },
                  "AlbumManager.html#save": {
                    "ref": "AlbumManager.html#save",
                    "tf": 689.5833333333334
                  },
                  "AlbumManager.html#starred": {
                    "ref": "AlbumManager.html#starred",
                    "tf": 4.545454545454546
                  },
                  "ShowManager.html#users": {
                    "ref": "ShowManager.html#users",
                    "tf": 7.142857142857142
                  },
                  "ShowManager.html#save": {
                    "ref": "ShowManager.html#save",
                    "tf": 689.5833333333334
                  },
                  "ShowManager.html#starred": {
                    "ref": "ShowManager.html#starred",
                    "tf": 5
                  },
                  "TrackManager.html#saved": {
                    "ref": "TrackManager.html#saved",
                    "tf": 689.5833333333334
                  },
                  "TrackManager.html#save": {
                    "ref": "TrackManager.html#save",
                    "tf": 689.5833333333334
                  },
                  "TrackManager.html#starred": {
                    "ref": "TrackManager.html#starred",
                    "tf": 4.545454545454546
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "s": {
                  "docs": {},
                  "h": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Playlist.html#remove": {
                            "ref": "Playlist.html#remove",
                            "tf": 25
                          },
                          "PlaylistManager.html#remove": {
                            "ref": "PlaylistManager.html#remove",
                            "tf": 20
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "g": {
                "docs": {
                  "Track.html#starred": {
                    "ref": "Track.html#starred",
                    "tf": 5.555555555555555
                  },
                  "TrackManager.html#saved": {
                    "ref": "TrackManager.html#saved",
                    "tf": 6.25
                  }
                }
              }
            }
          },
          "k": {
            "docs": {},
            "i": {
              "docs": {},
              "p": {
                "docs": {
                  "PlayerManager.html#next": {
                    "ref": "PlayerManager.html#next",
                    "tf": 10
                  },
                  "PlayerManager.html#back": {
                    "ref": "PlayerManager.html#back",
                    "tf": 10
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PlayerManager.html#recent": {
                          "ref": "PlayerManager.html#recent",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "s": {
                "docs": {},
                "n": {
                  "docs": {},
                  "'": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PlayerManager.html#recent": {
                          "ref": "PlayerManager.html#recent",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "Base.html": {
                    "ref": "Base.html",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "s": {
              "docs": {},
              "c": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "b": {
                      "docs": {
                        "AudioManager.html#analysis": {
                          "ref": "AudioManager.html#analysis",
                          "tf": 2.7777777777777777
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {
                    "Episode.html#queue": {
                      "ref": "Episode.html#queue",
                      "tf": 33.33333333333333
                    },
                    "Track.html#queue": {
                      "ref": "Track.html#queue",
                      "tf": 33.33333333333333
                    },
                    "PlayerManager.html#transfer": {
                      "ref": "PlayerManager.html#transfer",
                      "tf": 7.142857142857142
                    },
                    "PlayerManager.html#devices": {
                      "ref": "PlayerManager.html#devices",
                      "tf": 712.5
                    },
                    "PlayerManager.html#resume": {
                      "ref": "PlayerManager.html#resume",
                      "tf": 41.66666666666666
                    },
                    "PlayerManager.html#pause": {
                      "ref": "PlayerManager.html#pause",
                      "tf": 33.33333333333333
                    },
                    "PlayerManager.html#next": {
                      "ref": "PlayerManager.html#next",
                      "tf": 33.33333333333333
                    },
                    "PlayerManager.html#back": {
                      "ref": "PlayerManager.html#back",
                      "tf": 33.33333333333333
                    },
                    "PlayerManager.html#seek": {
                      "ref": "PlayerManager.html#seek",
                      "tf": 25
                    },
                    "PlayerManager.html#repeat": {
                      "ref": "PlayerManager.html#repeat",
                      "tf": 25
                    },
                    "PlayerManager.html#volume": {
                      "ref": "PlayerManager.html#volume",
                      "tf": 33.33333333333333
                    },
                    "PlayerManager.html#shuffle": {
                      "ref": "PlayerManager.html#shuffle",
                      "tf": 25
                    },
                    "PlayerManager.html#queue": {
                      "ref": "PlayerManager.html#queue",
                      "tf": 25
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "PlayerManager.html#transfer": {
                            "ref": "PlayerManager.html#transfer",
                            "tf": 7.142857142857142
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "i": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "PlaylistManager.html#tracks": {
                        "ref": "PlaylistManager.html#tracks",
                        "tf": 7.142857142857142
                      },
                      "UserManager.html#me": {
                        "ref": "UserManager.html#me",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "PlaylistManager.html#update": {
                        "ref": "PlaylistManager.html#update",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "ShowManager.html#remove": {
                      "ref": "ShowManager.html#remove",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "PlayerManager.html#seek": {
                      "ref": "PlayerManager.html#seek",
                      "tf": 7.142857142857142
                    },
                    "TrackManager.html#recommendations": {
                      "ref": "TrackManager.html#recommendations",
                      "tf": 3.8461538461538463
                    },
                    "ArtistManager.html#related": {
                      "ref": "ArtistManager.html#related",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "TrackManager.html#recommendations": {
                      "ref": "TrackManager.html#recommendations",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              },
              "r": {
                "docs": {
                  "Spotify.html#genres": {
                    "ref": "Spotify.html#genres",
                    "tf": 710
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Base.html": {
                      "ref": "Base.html",
                      "tf": 118.33333333333333
                    },
                    "HTTPError.html": {
                      "ref": "HTTPError.html",
                      "tf": 110
                    },
                    "ApiError.html": {
                      "ref": "ApiError.html",
                      "tf": 110
                    },
                    "Util.html": {
                      "ref": "Util.html",
                      "tf": 110
                    },
                    "AudioManager.html": {
                      "ref": "AudioManager.html",
                      "tf": 110
                    },
                    "Album.html": {
                      "ref": "Album.html",
                      "tf": 110
                    },
                    "Artist.html": {
                      "ref": "Artist.html",
                      "tf": 110
                    },
                    "Audio.html": {
                      "ref": "Audio.html",
                      "tf": 110
                    },
                    "Episode.html": {
                      "ref": "Episode.html",
                      "tf": 110
                    },
                    "User.html": {
                      "ref": "User.html",
                      "tf": 110
                    },
                    "Playlist.html": {
                      "ref": "Playlist.html",
                      "tf": 110
                    },
                    "Show.html": {
                      "ref": "Show.html",
                      "tf": 110
                    },
                    "CategoryManager.html": {
                      "ref": "CategoryManager.html",
                      "tf": 110
                    },
                    "Track.html": {
                      "ref": "Track.html",
                      "tf": 110
                    },
                    "EpisodeManager.html": {
                      "ref": "EpisodeManager.html",
                      "tf": 110
                    },
                    "PlayerManager.html": {
                      "ref": "PlayerManager.html",
                      "tf": 110
                    },
                    "AlbumManager.html": {
                      "ref": "AlbumManager.html",
                      "tf": 110
                    },
                    "PlaylistManager.html": {
                      "ref": "PlaylistManager.html",
                      "tf": 110
                    },
                    "ShowManager.html": {
                      "ref": "ShowManager.html",
                      "tf": 110
                    },
                    "TrackManager.html": {
                      "ref": "TrackManager.html",
                      "tf": 110
                    },
                    "ArtistManager.html": {
                      "ref": "ArtistManager.html",
                      "tf": 110
                    },
                    "UserManager.html": {
                      "ref": "UserManager.html",
                      "tf": 110
                    },
                    "Spotify.html": {
                      "ref": "Spotify.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Util.html#spotify": {
                        "ref": "Util.html#spotify",
                        "tf": 25
                      },
                      "AudioManager.html#spotify": {
                        "ref": "AudioManager.html#spotify",
                        "tf": 25
                      },
                      "Album.html#spotify": {
                        "ref": "Album.html#spotify",
                        "tf": 25
                      },
                      "Artist.html#spotify": {
                        "ref": "Artist.html#spotify",
                        "tf": 25
                      },
                      "Audio.html#spotify": {
                        "ref": "Audio.html#spotify",
                        "tf": 25
                      },
                      "Episode.html#spotify": {
                        "ref": "Episode.html#spotify",
                        "tf": 25
                      },
                      "User.html#spotify": {
                        "ref": "User.html#spotify",
                        "tf": 25
                      },
                      "Playlist.html#spotify": {
                        "ref": "Playlist.html#spotify",
                        "tf": 25
                      },
                      "Show.html#spotify": {
                        "ref": "Show.html#spotify",
                        "tf": 25
                      },
                      "CategoryManager.html#spotify": {
                        "ref": "CategoryManager.html#spotify",
                        "tf": 25
                      },
                      "Track.html#spotify": {
                        "ref": "Track.html#spotify",
                        "tf": 25
                      },
                      "EpisodeManager.html#spotify": {
                        "ref": "EpisodeManager.html#spotify",
                        "tf": 25
                      },
                      "PlayerManager.html#spotify": {
                        "ref": "PlayerManager.html#spotify",
                        "tf": 25
                      },
                      "AlbumManager.html#spotify": {
                        "ref": "AlbumManager.html#spotify",
                        "tf": 25
                      },
                      "PlaylistManager.html#spotify": {
                        "ref": "PlaylistManager.html#spotify",
                        "tf": 25
                      },
                      "ShowManager.html#spotify": {
                        "ref": "ShowManager.html#spotify",
                        "tf": 25
                      },
                      "TrackManager.html#spotify": {
                        "ref": "TrackManager.html#spotify",
                        "tf": 25
                      },
                      "ArtistManager.html#spotify": {
                        "ref": "ArtistManager.html#spotify",
                        "tf": 25
                      },
                      "UserManager.html#spotify": {
                        "ref": "UserManager.html#spotify",
                        "tf": 25
                      },
                      "Spotify.html": {
                        "ref": "Spotify.html",
                        "tf": 25
                      },
                      "Spotify.html#util": {
                        "ref": "Spotify.html#util",
                        "tf": 16.666666666666664
                      },
                      "Spotify.html#set": {
                        "ref": "Spotify.html#set",
                        "tf": 12.5
                      }
                    },
                    "'": {
                      "docs": {
                        "Util.html": {
                          "ref": "Util.html",
                          "tf": 16.666666666666664
                        },
                        "Spotify.html#access_token": {
                          "ref": "Spotify.html#access_token",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "Util.html#toJson": {
                      "ref": "Util.html#toJson",
                      "tf": 12.5
                    },
                    "Album.html#starred": {
                      "ref": "Album.html#starred",
                      "tf": 6.25
                    },
                    "Artist.html#following": {
                      "ref": "Artist.html#following",
                      "tf": 8.333333333333332
                    },
                    "Episode.html#starred": {
                      "ref": "Episode.html#starred",
                      "tf": 6.25
                    },
                    "User.html#following": {
                      "ref": "User.html#following",
                      "tf": 8.333333333333332
                    },
                    "Playlist.html#following": {
                      "ref": "Playlist.html#following",
                      "tf": 10
                    },
                    "Show.html#starred": {
                      "ref": "Show.html#starred",
                      "tf": 6.25
                    },
                    "Track.html#starred": {
                      "ref": "Track.html#starred",
                      "tf": 5.555555555555555
                    },
                    "EpisodeManager.html#starred": {
                      "ref": "EpisodeManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "AlbumManager.html#starred": {
                      "ref": "AlbumManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "PlaylistManager.html#followers": {
                      "ref": "PlaylistManager.html#followers",
                      "tf": 5.555555555555555
                    },
                    "ShowManager.html#starred": {
                      "ref": "ShowManager.html#starred",
                      "tf": 5
                    },
                    "TrackManager.html#starred": {
                      "ref": "TrackManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "ArtistManager.html#following": {
                      "ref": "ArtistManager.html#following",
                      "tf": 6.25
                    },
                    "UserManager.html#following": {
                      "ref": "UserManager.html#following",
                      "tf": 6.25
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "g": {
                  "docs": {
                    "PlaylistManager.html#modify": {
                      "ref": "PlaylistManager.html#modify",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "AudioManager.html#analysis": {
                          "ref": "AudioManager.html#analysis",
                          "tf": 2.7777777777777777
                        },
                        "EpisodeManager.html#get": {
                          "ref": "EpisodeManager.html#get",
                          "tf": 5.555555555555555
                        },
                        "EpisodeManager.html#search": {
                          "ref": "EpisodeManager.html#search",
                          "tf": 12.5
                        },
                        "AlbumManager.html#get": {
                          "ref": "AlbumManager.html#get",
                          "tf": 10
                        },
                        "AlbumManager.html#tracks": {
                          "ref": "AlbumManager.html#tracks",
                          "tf": 10
                        },
                        "AlbumManager.html#search": {
                          "ref": "AlbumManager.html#search",
                          "tf": 12.5
                        },
                        "PlaylistManager.html#search": {
                          "ref": "PlaylistManager.html#search",
                          "tf": 12.5
                        },
                        "ShowManager.html#get": {
                          "ref": "ShowManager.html#get",
                          "tf": 5.555555555555555
                        },
                        "ShowManager.html#episodes": {
                          "ref": "ShowManager.html#episodes",
                          "tf": 10
                        },
                        "ShowManager.html#search": {
                          "ref": "ShowManager.html#search",
                          "tf": 12.5
                        },
                        "TrackManager.html#get": {
                          "ref": "TrackManager.html#get",
                          "tf": 5.555555555555555
                        },
                        "TrackManager.html#search": {
                          "ref": "TrackManager.html#search",
                          "tf": 12.5
                        },
                        "ArtistManager.html#get": {
                          "ref": "ArtistManager.html#get",
                          "tf": 5.555555555555555
                        },
                        "ArtistManager.html#top": {
                          "ref": "ArtistManager.html#top",
                          "tf": 7.142857142857142
                        },
                        "ArtistManager.html#related": {
                          "ref": "ArtistManager.html#related",
                          "tf": 7.142857142857142
                        },
                        "ArtistManager.html#search": {
                          "ref": "ArtistManager.html#search",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "g": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "CategoryManager.html": {
                            "ref": "CategoryManager.html",
                            "tf": 16.666666666666664
                          },
                          "CategoryManager.html#get": {
                            "ref": "CategoryManager.html#get",
                            "tf": 8.333333333333332
                          },
                          "CategoryManager.html#all": {
                            "ref": "CategoryManager.html#all",
                            "tf": 8.333333333333332
                          },
                          "PlaylistManager.html#categories": {
                            "ref": "PlaylistManager.html#categories",
                            "tf": 683.3333333333334
                          },
                          "Spotify.html#categories": {
                            "ref": "Spotify.html#categories",
                            "tf": 725
                          }
                        }
                      },
                      "y": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "CategoryManager.html": {
                                      "ref": "CategoryManager.html",
                                      "tf": 1900
                                    },
                                    "Spotify.html#categories": {
                                      "ref": "Spotify.html#categories",
                                      "tf": 50
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "#": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {
                                                        "CategoryManager.html#spotify": {
                                                          "ref": "CategoryManager.html#spotify",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "CategoryManager.html#get": {
                                                  "ref": "CategoryManager.html#get",
                                                  "tf": 1300
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "l": {
                                            "docs": {
                                              "CategoryManager.html#all": {
                                                "ref": "CategoryManager.html#all",
                                                "tf": 1300
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "UserManager.html#top": {
                        "ref": "UserManager.html#top",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AudioManager.html#analysis": {
                          "ref": "AudioManager.html#analysis",
                          "tf": 2.7777777777777777
                        }
                      }
                    }
                  },
                  "x": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PlayerManager.html#start": {
                          "ref": "PlayerManager.html#start",
                          "tf": 16.666666666666664
                        },
                        "PlayerManager.html#repeat": {
                          "ref": "PlayerManager.html#repeat",
                          "tf": 5
                        }
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Artist.html#top": {
                          "ref": "Artist.html#top",
                          "tf": 33.33333333333333
                        },
                        "CategoryManager.html#get": {
                          "ref": "CategoryManager.html#get",
                          "tf": 25
                        },
                        "ArtistManager.html#top": {
                          "ref": "ArtistManager.html#top",
                          "tf": 32.14285714285714
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "s": {
                  "docs": {
                    "PlaylistManager.html#modify": {
                      "ref": "PlaylistManager.html#modify",
                      "tf": 6.25
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "Playlist.html#cover": {
                      "ref": "Playlist.html#cover",
                      "tf": 693.3333333333334
                    },
                    "PlaylistManager.html#cover": {
                      "ref": "PlaylistManager.html#cover",
                      "tf": 675
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Album.html#starred": {
                          "ref": "Album.html#starred",
                          "tf": 6.25
                        },
                        "Artist.html#following": {
                          "ref": "Artist.html#following",
                          "tf": 8.333333333333332
                        },
                        "Episode.html#starred": {
                          "ref": "Episode.html#starred",
                          "tf": 6.25
                        },
                        "User.html#following": {
                          "ref": "User.html#following",
                          "tf": 8.333333333333332
                        },
                        "Show.html#starred": {
                          "ref": "Show.html#starred",
                          "tf": 6.25
                        },
                        "Track.html#starred": {
                          "ref": "Track.html#starred",
                          "tf": 5.555555555555555
                        },
                        "EpisodeManager.html#users": {
                          "ref": "EpisodeManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#save": {
                          "ref": "EpisodeManager.html#save",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#remove": {
                          "ref": "EpisodeManager.html#remove",
                          "tf": 7.142857142857142
                        },
                        "EpisodeManager.html#starred": {
                          "ref": "EpisodeManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "PlayerManager.html#state": {
                          "ref": "PlayerManager.html#state",
                          "tf": 10
                        },
                        "PlayerManager.html#current": {
                          "ref": "PlayerManager.html#current",
                          "tf": 690.4761904761905
                        },
                        "PlayerManager.html#resume": {
                          "ref": "PlayerManager.html#resume",
                          "tf": 8.333333333333332
                        },
                        "PlayerManager.html#seek": {
                          "ref": "PlayerManager.html#seek",
                          "tf": 7.142857142857142
                        },
                        "PlayerManager.html#volume": {
                          "ref": "PlayerManager.html#volume",
                          "tf": 8.333333333333332
                        },
                        "PlayerManager.html#recent": {
                          "ref": "PlayerManager.html#recent",
                          "tf": 8.333333333333332
                        },
                        "PlayerManager.html#queue": {
                          "ref": "PlayerManager.html#queue",
                          "tf": 7.142857142857142
                        },
                        "AlbumManager.html#saved": {
                          "ref": "AlbumManager.html#saved",
                          "tf": 6.25
                        },
                        "AlbumManager.html#save": {
                          "ref": "AlbumManager.html#save",
                          "tf": 6.25
                        },
                        "AlbumManager.html#remove": {
                          "ref": "AlbumManager.html#remove",
                          "tf": 6.25
                        },
                        "AlbumManager.html#starred": {
                          "ref": "AlbumManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "PlaylistManager.html#users": {
                          "ref": "PlaylistManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "PlaylistManager.html#follow": {
                          "ref": "PlaylistManager.html#follow",
                          "tf": 10
                        },
                        "PlaylistManager.html#unfollow": {
                          "ref": "PlaylistManager.html#unfollow",
                          "tf": 10
                        },
                        "PlaylistManager.html#cover": {
                          "ref": "PlaylistManager.html#cover",
                          "tf": 10
                        },
                        "ShowManager.html#users": {
                          "ref": "ShowManager.html#users",
                          "tf": 7.142857142857142
                        },
                        "ShowManager.html#save": {
                          "ref": "ShowManager.html#save",
                          "tf": 6.25
                        },
                        "ShowManager.html#remove": {
                          "ref": "ShowManager.html#remove",
                          "tf": 6.25
                        },
                        "ShowManager.html#starred": {
                          "ref": "ShowManager.html#starred",
                          "tf": 5
                        },
                        "TrackManager.html#saved": {
                          "ref": "TrackManager.html#saved",
                          "tf": 6.25
                        },
                        "TrackManager.html#save": {
                          "ref": "TrackManager.html#save",
                          "tf": 6.25
                        },
                        "TrackManager.html#remove": {
                          "ref": "TrackManager.html#remove",
                          "tf": 6.25
                        },
                        "TrackManager.html#starred": {
                          "ref": "TrackManager.html#starred",
                          "tf": 4.545454545454546
                        },
                        "ArtistManager.html#follow": {
                          "ref": "ArtistManager.html#follow",
                          "tf": 7.142857142857142
                        },
                        "ArtistManager.html#unfollow": {
                          "ref": "ArtistManager.html#unfollow",
                          "tf": 7.142857142857142
                        },
                        "ArtistManager.html#following": {
                          "ref": "ArtistManager.html#following",
                          "tf": 6.25
                        },
                        "UserManager.html#top": {
                          "ref": "UserManager.html#top",
                          "tf": 6.25
                        },
                        "UserManager.html#followed": {
                          "ref": "UserManager.html#followed",
                          "tf": 12.5
                        },
                        "UserManager.html#follow": {
                          "ref": "UserManager.html#follow",
                          "tf": 7.142857142857142
                        },
                        "UserManager.html#unfollow": {
                          "ref": "UserManager.html#unfollow",
                          "tf": 7.142857142857142
                        },
                        "UserManager.html#following": {
                          "ref": "UserManager.html#following",
                          "tf": 6.25
                        },
                        "UserManager.html#me": {
                          "ref": "UserManager.html#me",
                          "tf": 11.11111111111111
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "PlaylistManager.html#create": {
                      "ref": "PlaylistManager.html#create",
                      "tf": 687.5
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "Base.html": {
                    "ref": "Base.html",
                    "tf": 1908.3333333333333
                  },
                  "TrackManager.html#recommendations": {
                    "ref": "TrackManager.html#recommendations",
                    "tf": 3.8461538461538463
                  },
                  "UserManager.html#top": {
                    "ref": "UserManager.html#top",
                    "tf": 6.25
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "k": {
                "docs": {
                  "PlayerManager.html#back": {
                    "ref": "PlayerManager.html#back",
                    "tf": 683.3333333333334
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {
                  "Util.html#fetch": {
                    "ref": "Util.html#fetch",
                    "tf": 14.285714285714285
                  }
                }
              }
            }
          },
          "e": {
            "docs": {
              "PlayerManager.html#current": {
                "ref": "PlayerManager.html#current",
                "tf": 7.142857142857142
              }
            }
          }
        },
        "e": {
          "docs": {},
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "HTTPError.html": {
                      "ref": "HTTPError.html",
                      "tf": 25
                    },
                    "ApiError.html": {
                      "ref": "ApiError.html",
                      "tf": 25
                    },
                    "ApiError.html#error": {
                      "ref": "ApiError.html#error",
                      "tf": 700
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Episode.html": {
                        "ref": "Episode.html",
                        "tf": 1925
                      },
                      "Episode.html#save": {
                        "ref": "Episode.html#save",
                        "tf": 16.666666666666664
                      },
                      "Episode.html#remove": {
                        "ref": "Episode.html#remove",
                        "tf": 16.666666666666664
                      },
                      "Episode.html#starred": {
                        "ref": "Episode.html#starred",
                        "tf": 6.25
                      },
                      "Episode.html#queue": {
                        "ref": "Episode.html#queue",
                        "tf": 16.666666666666664
                      },
                      "EpisodeManager.html": {
                        "ref": "EpisodeManager.html",
                        "tf": 16.666666666666664
                      },
                      "EpisodeManager.html#get": {
                        "ref": "EpisodeManager.html#get",
                        "tf": 5.555555555555555
                      },
                      "EpisodeManager.html#users": {
                        "ref": "EpisodeManager.html#users",
                        "tf": 7.142857142857142
                      },
                      "EpisodeManager.html#save": {
                        "ref": "EpisodeManager.html#save",
                        "tf": 7.142857142857142
                      },
                      "EpisodeManager.html#remove": {
                        "ref": "EpisodeManager.html#remove",
                        "tf": 7.142857142857142
                      },
                      "EpisodeManager.html#starred": {
                        "ref": "EpisodeManager.html#starred",
                        "tf": 9.090909090909092
                      },
                      "EpisodeManager.html#search": {
                        "ref": "EpisodeManager.html#search",
                        "tf": 12.5
                      },
                      "PlayerManager.html#recent": {
                        "ref": "PlayerManager.html#recent",
                        "tf": 4.166666666666666
                      },
                      "ShowManager.html#episodes": {
                        "ref": "ShowManager.html#episodes",
                        "tf": 685
                      },
                      "Spotify.html#episodes": {
                        "ref": "Spotify.html#episodes",
                        "tf": 725
                      }
                    },
                    "e": {
                      "docs": {},
                      "#": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "i": {
                                      "docs": {
                                        "Episode.html#spotify": {
                                          "ref": "Episode.html#spotify",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "a": {
                            "docs": {},
                            "v": {
                              "docs": {
                                "Episode.html#save": {
                                  "ref": "Episode.html#save",
                                  "tf": 1150
                                }
                              }
                            }
                          },
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {
                                  "Episode.html#starred": {
                                    "ref": "Episode.html#starred",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "v": {
                                  "docs": {
                                    "Episode.html#remove": {
                                      "ref": "Episode.html#remove",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "q": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "u": {
                                "docs": {
                                  "Episode.html#queue": {
                                    "ref": "Episode.html#queue",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "m": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "g": {
                                "docs": {
                                  "EpisodeManager.html": {
                                    "ref": "EpisodeManager.html",
                                    "tf": 1900
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "#": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "EpisodeManager.html#spotify": {
                                                        "ref": "EpisodeManager.html#spotify",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "v": {
                                            "docs": {
                                              "EpisodeManager.html#save": {
                                                "ref": "EpisodeManager.html#save",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        },
                                        "t": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "EpisodeManager.html#starred": {
                                                  "ref": "EpisodeManager.html#starred",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {
                                                    "EpisodeManager.html#search": {
                                                      "ref": "EpisodeManager.html#search",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "g": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "EpisodeManager.html#get": {
                                                "ref": "EpisodeManager.html#get",
                                                "tf": 1300
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "u": {
                                        "docs": {},
                                        "s": {
                                          "docs": {
                                            "EpisodeManager.html#users": {
                                              "ref": "EpisodeManager.html#users",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      },
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "v": {
                                                "docs": {
                                                  "EpisodeManager.html#remove": {
                                                    "ref": "EpisodeManager.html#remove",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "d": {
              "docs": {
                "PlayerManager.html#queue": {
                  "ref": "PlayerManager.html#queue",
                  "tf": 7.142857142857142
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "TrackManager.html#recommendations": {
                        "ref": "TrackManager.html#recommendations",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "t": {
            "docs": {},
            "t": {
              "docs": {},
              "p": {
                "docs": {
                  "HTTPError.html": {
                    "ref": "HTTPError.html",
                    "tf": 25
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "HTTPError.html": {
                              "ref": "HTTPError.html",
                              "tf": 1900
                            }
                          },
                          "#": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "s": {
                                          "docs": {
                                            "HTTPError.html#response": {
                                              "ref": "HTTPError.html#response",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "HTTPError.html#response": {
                      "ref": "HTTPError.html#response",
                      "tf": 25
                    },
                    "ApiError.html#error": {
                      "ref": "ApiError.html#error",
                      "tf": 16.666666666666664
                    },
                    "Util.html#fetch": {
                      "ref": "Util.html#fetch",
                      "tf": 680.952380952381
                    }
                  },
                  "#": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "HTTPError.html#response": {
                                      "ref": "HTTPError.html#response",
                                      "tf": 33.33333333333333
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "&": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Util.html#fetch": {
                                              "ref": "Util.html#fetch",
                                              "tf": 14.285714285714285
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AudioManager.html#features": {
                        "ref": "AudioManager.html#features",
                        "tf": 688.8888888888889
                      },
                      "Audio.html#features": {
                        "ref": "Audio.html#features",
                        "tf": 712.5
                      },
                      "AlbumManager.html#releases": {
                        "ref": "AlbumManager.html#releases",
                        "tf": 8.333333333333332
                      },
                      "PlaylistManager.html#featured": {
                        "ref": "PlaylistManager.html#featured",
                        "tf": 695.8333333333334
                      },
                      "TrackManager.html#audio": {
                        "ref": "TrackManager.html#audio",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Util.html#toJson": {
                            "ref": "Util.html#toJson",
                            "tf": 110
                          },
                          "Util.html#fetch": {
                            "ref": "Util.html#fetch",
                            "tf": 110
                          },
                          "AudioManager.html#features": {
                            "ref": "AudioManager.html#features",
                            "tf": 110
                          },
                          "AudioManager.html#analysis": {
                            "ref": "AudioManager.html#analysis",
                            "tf": 110
                          },
                          "Album.html#play": {
                            "ref": "Album.html#play",
                            "tf": 110
                          },
                          "Album.html#save": {
                            "ref": "Album.html#save",
                            "tf": 110
                          },
                          "Album.html#remove": {
                            "ref": "Album.html#remove",
                            "tf": 110
                          },
                          "Album.html#starred": {
                            "ref": "Album.html#starred",
                            "tf": 110
                          },
                          "Artist.html#albums": {
                            "ref": "Artist.html#albums",
                            "tf": 110
                          },
                          "Artist.html#follow": {
                            "ref": "Artist.html#follow",
                            "tf": 110
                          },
                          "Artist.html#unfollow": {
                            "ref": "Artist.html#unfollow",
                            "tf": 110
                          },
                          "Artist.html#following": {
                            "ref": "Artist.html#following",
                            "tf": 110
                          },
                          "Artist.html#top": {
                            "ref": "Artist.html#top",
                            "tf": 110
                          },
                          "Artist.html#related": {
                            "ref": "Artist.html#related",
                            "tf": 110
                          },
                          "Audio.html#features": {
                            "ref": "Audio.html#features",
                            "tf": 110
                          },
                          "Audio.html#analysis": {
                            "ref": "Audio.html#analysis",
                            "tf": 110
                          },
                          "Episode.html#save": {
                            "ref": "Episode.html#save",
                            "tf": 110
                          },
                          "Episode.html#remove": {
                            "ref": "Episode.html#remove",
                            "tf": 110
                          },
                          "Episode.html#starred": {
                            "ref": "Episode.html#starred",
                            "tf": 110
                          },
                          "Episode.html#queue": {
                            "ref": "Episode.html#queue",
                            "tf": 110
                          },
                          "User.html#follow": {
                            "ref": "User.html#follow",
                            "tf": 110
                          },
                          "User.html#unfollow": {
                            "ref": "User.html#unfollow",
                            "tf": 110
                          },
                          "User.html#following": {
                            "ref": "User.html#following",
                            "tf": 110
                          },
                          "Playlist.html#play": {
                            "ref": "Playlist.html#play",
                            "tf": 110
                          },
                          "Playlist.html#modify": {
                            "ref": "Playlist.html#modify",
                            "tf": 110
                          },
                          "Playlist.html#add": {
                            "ref": "Playlist.html#add",
                            "tf": 110
                          },
                          "Playlist.html#remove": {
                            "ref": "Playlist.html#remove",
                            "tf": 110
                          },
                          "Playlist.html#follow": {
                            "ref": "Playlist.html#follow",
                            "tf": 110
                          },
                          "Playlist.html#unfollow": {
                            "ref": "Playlist.html#unfollow",
                            "tf": 110
                          },
                          "Playlist.html#following": {
                            "ref": "Playlist.html#following",
                            "tf": 110
                          },
                          "Playlist.html#cover": {
                            "ref": "Playlist.html#cover",
                            "tf": 110
                          },
                          "Show.html#play": {
                            "ref": "Show.html#play",
                            "tf": 110
                          },
                          "Show.html#save": {
                            "ref": "Show.html#save",
                            "tf": 110
                          },
                          "Show.html#remove": {
                            "ref": "Show.html#remove",
                            "tf": 110
                          },
                          "Show.html#starred": {
                            "ref": "Show.html#starred",
                            "tf": 110
                          },
                          "CategoryManager.html#get": {
                            "ref": "CategoryManager.html#get",
                            "tf": 110
                          },
                          "CategoryManager.html#all": {
                            "ref": "CategoryManager.html#all",
                            "tf": 110
                          },
                          "Track.html#save": {
                            "ref": "Track.html#save",
                            "tf": 110
                          },
                          "Track.html#remove": {
                            "ref": "Track.html#remove",
                            "tf": 110
                          },
                          "Track.html#starred": {
                            "ref": "Track.html#starred",
                            "tf": 110
                          },
                          "Track.html#queue": {
                            "ref": "Track.html#queue",
                            "tf": 110
                          },
                          "EpisodeManager.html#get": {
                            "ref": "EpisodeManager.html#get",
                            "tf": 110
                          },
                          "EpisodeManager.html#users": {
                            "ref": "EpisodeManager.html#users",
                            "tf": 110
                          },
                          "EpisodeManager.html#save": {
                            "ref": "EpisodeManager.html#save",
                            "tf": 110
                          },
                          "EpisodeManager.html#remove": {
                            "ref": "EpisodeManager.html#remove",
                            "tf": 110
                          },
                          "EpisodeManager.html#starred": {
                            "ref": "EpisodeManager.html#starred",
                            "tf": 110
                          },
                          "EpisodeManager.html#search": {
                            "ref": "EpisodeManager.html#search",
                            "tf": 110
                          },
                          "PlayerManager.html#state": {
                            "ref": "PlayerManager.html#state",
                            "tf": 110
                          },
                          "PlayerManager.html#transfer": {
                            "ref": "PlayerManager.html#transfer",
                            "tf": 110
                          },
                          "PlayerManager.html#devices": {
                            "ref": "PlayerManager.html#devices",
                            "tf": 110
                          },
                          "PlayerManager.html#current": {
                            "ref": "PlayerManager.html#current",
                            "tf": 110
                          },
                          "PlayerManager.html#start": {
                            "ref": "PlayerManager.html#start",
                            "tf": 110
                          },
                          "PlayerManager.html#resume": {
                            "ref": "PlayerManager.html#resume",
                            "tf": 110
                          },
                          "PlayerManager.html#pause": {
                            "ref": "PlayerManager.html#pause",
                            "tf": 110
                          },
                          "PlayerManager.html#next": {
                            "ref": "PlayerManager.html#next",
                            "tf": 110
                          },
                          "PlayerManager.html#back": {
                            "ref": "PlayerManager.html#back",
                            "tf": 110
                          },
                          "PlayerManager.html#seek": {
                            "ref": "PlayerManager.html#seek",
                            "tf": 110
                          },
                          "PlayerManager.html#repeat": {
                            "ref": "PlayerManager.html#repeat",
                            "tf": 110
                          },
                          "PlayerManager.html#volume": {
                            "ref": "PlayerManager.html#volume",
                            "tf": 110
                          },
                          "PlayerManager.html#shuffle": {
                            "ref": "PlayerManager.html#shuffle",
                            "tf": 110
                          },
                          "PlayerManager.html#recent": {
                            "ref": "PlayerManager.html#recent",
                            "tf": 110
                          },
                          "PlayerManager.html#queue": {
                            "ref": "PlayerManager.html#queue",
                            "tf": 110
                          },
                          "AlbumManager.html#get": {
                            "ref": "AlbumManager.html#get",
                            "tf": 110
                          },
                          "AlbumManager.html#tracks": {
                            "ref": "AlbumManager.html#tracks",
                            "tf": 110
                          },
                          "AlbumManager.html#saved": {
                            "ref": "AlbumManager.html#saved",
                            "tf": 110
                          },
                          "AlbumManager.html#save": {
                            "ref": "AlbumManager.html#save",
                            "tf": 110
                          },
                          "AlbumManager.html#remove": {
                            "ref": "AlbumManager.html#remove",
                            "tf": 110
                          },
                          "AlbumManager.html#starred": {
                            "ref": "AlbumManager.html#starred",
                            "tf": 110
                          },
                          "AlbumManager.html#releases": {
                            "ref": "AlbumManager.html#releases",
                            "tf": 110
                          },
                          "AlbumManager.html#search": {
                            "ref": "AlbumManager.html#search",
                            "tf": 110
                          },
                          "PlaylistManager.html#get": {
                            "ref": "PlaylistManager.html#get",
                            "tf": 110
                          },
                          "PlaylistManager.html#modify": {
                            "ref": "PlaylistManager.html#modify",
                            "tf": 110
                          },
                          "PlaylistManager.html#update": {
                            "ref": "PlaylistManager.html#update",
                            "tf": 110
                          },
                          "PlaylistManager.html#tracks": {
                            "ref": "PlaylistManager.html#tracks",
                            "tf": 110
                          },
                          "PlaylistManager.html#add": {
                            "ref": "PlaylistManager.html#add",
                            "tf": 110
                          },
                          "PlaylistManager.html#remove": {
                            "ref": "PlaylistManager.html#remove",
                            "tf": 110
                          },
                          "PlaylistManager.html#users": {
                            "ref": "PlaylistManager.html#users",
                            "tf": 110
                          },
                          "PlaylistManager.html#follow": {
                            "ref": "PlaylistManager.html#follow",
                            "tf": 110
                          },
                          "PlaylistManager.html#unfollow": {
                            "ref": "PlaylistManager.html#unfollow",
                            "tf": 110
                          },
                          "PlaylistManager.html#followers": {
                            "ref": "PlaylistManager.html#followers",
                            "tf": 110
                          },
                          "PlaylistManager.html#create": {
                            "ref": "PlaylistManager.html#create",
                            "tf": 110
                          },
                          "PlaylistManager.html#featured": {
                            "ref": "PlaylistManager.html#featured",
                            "tf": 110
                          },
                          "PlaylistManager.html#categories": {
                            "ref": "PlaylistManager.html#categories",
                            "tf": 110
                          },
                          "PlaylistManager.html#cover": {
                            "ref": "PlaylistManager.html#cover",
                            "tf": 110
                          },
                          "PlaylistManager.html#search": {
                            "ref": "PlaylistManager.html#search",
                            "tf": 110
                          },
                          "ShowManager.html#get": {
                            "ref": "ShowManager.html#get",
                            "tf": 110
                          },
                          "ShowManager.html#episodes": {
                            "ref": "ShowManager.html#episodes",
                            "tf": 110
                          },
                          "ShowManager.html#users": {
                            "ref": "ShowManager.html#users",
                            "tf": 110
                          },
                          "ShowManager.html#save": {
                            "ref": "ShowManager.html#save",
                            "tf": 110
                          },
                          "ShowManager.html#remove": {
                            "ref": "ShowManager.html#remove",
                            "tf": 110
                          },
                          "ShowManager.html#starred": {
                            "ref": "ShowManager.html#starred",
                            "tf": 110
                          },
                          "ShowManager.html#search": {
                            "ref": "ShowManager.html#search",
                            "tf": 110
                          },
                          "TrackManager.html#get": {
                            "ref": "TrackManager.html#get",
                            "tf": 110
                          },
                          "TrackManager.html#saved": {
                            "ref": "TrackManager.html#saved",
                            "tf": 110
                          },
                          "TrackManager.html#save": {
                            "ref": "TrackManager.html#save",
                            "tf": 110
                          },
                          "TrackManager.html#remove": {
                            "ref": "TrackManager.html#remove",
                            "tf": 110
                          },
                          "TrackManager.html#starred": {
                            "ref": "TrackManager.html#starred",
                            "tf": 110
                          },
                          "TrackManager.html#search": {
                            "ref": "TrackManager.html#search",
                            "tf": 110
                          },
                          "TrackManager.html#recommendations": {
                            "ref": "TrackManager.html#recommendations",
                            "tf": 110
                          },
                          "ArtistManager.html#get": {
                            "ref": "ArtistManager.html#get",
                            "tf": 110
                          },
                          "ArtistManager.html#follow": {
                            "ref": "ArtistManager.html#follow",
                            "tf": 110
                          },
                          "ArtistManager.html#unfollow": {
                            "ref": "ArtistManager.html#unfollow",
                            "tf": 110
                          },
                          "ArtistManager.html#following": {
                            "ref": "ArtistManager.html#following",
                            "tf": 110
                          },
                          "ArtistManager.html#top": {
                            "ref": "ArtistManager.html#top",
                            "tf": 110
                          },
                          "ArtistManager.html#related": {
                            "ref": "ArtistManager.html#related",
                            "tf": 110
                          },
                          "ArtistManager.html#search": {
                            "ref": "ArtistManager.html#search",
                            "tf": 110
                          },
                          "UserManager.html#get": {
                            "ref": "UserManager.html#get",
                            "tf": 110
                          },
                          "UserManager.html#top": {
                            "ref": "UserManager.html#top",
                            "tf": 110
                          },
                          "UserManager.html#followed": {
                            "ref": "UserManager.html#followed",
                            "tf": 110
                          },
                          "UserManager.html#follow": {
                            "ref": "UserManager.html#follow",
                            "tf": 110
                          },
                          "UserManager.html#unfollow": {
                            "ref": "UserManager.html#unfollow",
                            "tf": 110
                          },
                          "UserManager.html#following": {
                            "ref": "UserManager.html#following",
                            "tf": 110
                          },
                          "UserManager.html#me": {
                            "ref": "UserManager.html#me",
                            "tf": 110
                          },
                          "Spotify.html#genres": {
                            "ref": "Spotify.html#genres",
                            "tf": 110
                          },
                          "Spotify.html#markets": {
                            "ref": "Spotify.html#markets",
                            "tf": 110
                          },
                          "Spotify.html#set": {
                            "ref": "Spotify.html#set",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "PlaylistManager.html#tracks": {
                    "ref": "PlaylistManager.html#tracks",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "o": {
                  "docs": {},
                  "w": {
                    "docs": {
                      "Artist.html#follow": {
                        "ref": "Artist.html#follow",
                        "tf": 716.6666666666666
                      },
                      "Artist.html#following": {
                        "ref": "Artist.html#following",
                        "tf": 708.3333333333334
                      },
                      "User.html#follow": {
                        "ref": "User.html#follow",
                        "tf": 716.6666666666666
                      },
                      "User.html#following": {
                        "ref": "User.html#following",
                        "tf": 708.3333333333334
                      },
                      "Playlist.html#follow": {
                        "ref": "Playlist.html#follow",
                        "tf": 716.6666666666666
                      },
                      "Playlist.html#following": {
                        "ref": "Playlist.html#following",
                        "tf": 693.3333333333334
                      },
                      "PlaylistManager.html#users": {
                        "ref": "PlaylistManager.html#users",
                        "tf": 7.142857142857142
                      },
                      "PlaylistManager.html#follow": {
                        "ref": "PlaylistManager.html#follow",
                        "tf": 685
                      },
                      "PlaylistManager.html#unfollow": {
                        "ref": "PlaylistManager.html#unfollow",
                        "tf": 10
                      },
                      "PlaylistManager.html#followers": {
                        "ref": "PlaylistManager.html#followers",
                        "tf": 680.5555555555555
                      },
                      "ArtistManager.html#follow": {
                        "ref": "ArtistManager.html#follow",
                        "tf": 690.4761904761905
                      },
                      "ArtistManager.html#unfollow": {
                        "ref": "ArtistManager.html#unfollow",
                        "tf": 7.142857142857142
                      },
                      "ArtistManager.html#following": {
                        "ref": "ArtistManager.html#following",
                        "tf": 681.25
                      },
                      "UserManager.html#followed": {
                        "ref": "UserManager.html#followed",
                        "tf": 695.8333333333334
                      },
                      "UserManager.html#follow": {
                        "ref": "UserManager.html#follow",
                        "tf": 690.4761904761905
                      },
                      "UserManager.html#unfollow": {
                        "ref": "UserManager.html#unfollow",
                        "tf": 7.142857142857142
                      },
                      "UserManager.html#following": {
                        "ref": "UserManager.html#following",
                        "tf": 681.25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "HTTPError.html#response": {
                        "ref": "HTTPError.html#response",
                        "tf": 110
                      },
                      "ApiError.html#error": {
                        "ref": "ApiError.html#error",
                        "tf": 110
                      },
                      "Util.html#spotify": {
                        "ref": "Util.html#spotify",
                        "tf": 110
                      },
                      "AudioManager.html#spotify": {
                        "ref": "AudioManager.html#spotify",
                        "tf": 110
                      },
                      "Album.html#spotify": {
                        "ref": "Album.html#spotify",
                        "tf": 110
                      },
                      "Artist.html#spotify": {
                        "ref": "Artist.html#spotify",
                        "tf": 110
                      },
                      "Audio.html#spotify": {
                        "ref": "Audio.html#spotify",
                        "tf": 110
                      },
                      "Episode.html#spotify": {
                        "ref": "Episode.html#spotify",
                        "tf": 110
                      },
                      "User.html#spotify": {
                        "ref": "User.html#spotify",
                        "tf": 110
                      },
                      "Playlist.html#spotify": {
                        "ref": "Playlist.html#spotify",
                        "tf": 110
                      },
                      "Show.html#spotify": {
                        "ref": "Show.html#spotify",
                        "tf": 110
                      },
                      "CategoryManager.html#spotify": {
                        "ref": "CategoryManager.html#spotify",
                        "tf": 110
                      },
                      "Track.html#spotify": {
                        "ref": "Track.html#spotify",
                        "tf": 110
                      },
                      "Track.html#audio": {
                        "ref": "Track.html#audio",
                        "tf": 110
                      },
                      "EpisodeManager.html#spotify": {
                        "ref": "EpisodeManager.html#spotify",
                        "tf": 110
                      },
                      "PlayerManager.html#spotify": {
                        "ref": "PlayerManager.html#spotify",
                        "tf": 110
                      },
                      "AlbumManager.html#spotify": {
                        "ref": "AlbumManager.html#spotify",
                        "tf": 110
                      },
                      "PlaylistManager.html#spotify": {
                        "ref": "PlaylistManager.html#spotify",
                        "tf": 110
                      },
                      "ShowManager.html#spotify": {
                        "ref": "ShowManager.html#spotify",
                        "tf": 110
                      },
                      "TrackManager.html#spotify": {
                        "ref": "TrackManager.html#spotify",
                        "tf": 110
                      },
                      "TrackManager.html#audio": {
                        "ref": "TrackManager.html#audio",
                        "tf": 110
                      },
                      "ArtistManager.html#spotify": {
                        "ref": "ArtistManager.html#spotify",
                        "tf": 110
                      },
                      "UserManager.html#spotify": {
                        "ref": "UserManager.html#spotify",
                        "tf": 110
                      },
                      "Spotify.html#access_token": {
                        "ref": "Spotify.html#access_token",
                        "tf": 110
                      },
                      "Spotify.html#util": {
                        "ref": "Spotify.html#util",
                        "tf": 110
                      },
                      "Spotify.html#player": {
                        "ref": "Spotify.html#player",
                        "tf": 110
                      },
                      "Spotify.html#tracks": {
                        "ref": "Spotify.html#tracks",
                        "tf": 110
                      },
                      "Spotify.html#playlists": {
                        "ref": "Spotify.html#playlists",
                        "tf": 110
                      },
                      "Spotify.html#episodes": {
                        "ref": "Spotify.html#episodes",
                        "tf": 110
                      },
                      "Spotify.html#shows": {
                        "ref": "Spotify.html#shows",
                        "tf": 110
                      },
                      "Spotify.html#albums": {
                        "ref": "Spotify.html#albums",
                        "tf": 110
                      },
                      "Spotify.html#artists": {
                        "ref": "Spotify.html#artists",
                        "tf": 110
                      },
                      "Spotify.html#categories": {
                        "ref": "Spotify.html#categories",
                        "tf": 110
                      },
                      "Spotify.html#users": {
                        "ref": "Spotify.html#users",
                        "tf": 110
                      },
                      "Spotify.html#refresher": {
                        "ref": "Spotify.html#refresher",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Util.html#fetch": {
                        "ref": "Util.html#fetch",
                        "tf": 14.285714285714285
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "g": {
                  "docs": {
                    "AudioManager.html": {
                      "ref": "AudioManager.html",
                      "tf": 16.666666666666664
                    },
                    "CategoryManager.html": {
                      "ref": "CategoryManager.html",
                      "tf": 16.666666666666664
                    },
                    "EpisodeManager.html": {
                      "ref": "EpisodeManager.html",
                      "tf": 16.666666666666664
                    },
                    "PlayerManager.html": {
                      "ref": "PlayerManager.html",
                      "tf": 16.666666666666664
                    },
                    "AlbumManager.html": {
                      "ref": "AlbumManager.html",
                      "tf": 16.666666666666664
                    },
                    "PlaylistManager.html": {
                      "ref": "PlaylistManager.html",
                      "tf": 16.666666666666664
                    },
                    "ShowManager.html": {
                      "ref": "ShowManager.html",
                      "tf": 16.666666666666664
                    },
                    "TrackManager.html": {
                      "ref": "TrackManager.html",
                      "tf": 16.666666666666664
                    },
                    "ArtistManager.html": {
                      "ref": "ArtistManager.html",
                      "tf": 16.666666666666664
                    },
                    "UserManager.html": {
                      "ref": "UserManager.html",
                      "tf": 16.666666666666664
                    },
                    "Spotify.html#player": {
                      "ref": "Spotify.html#player",
                      "tf": 25
                    },
                    "Spotify.html#tracks": {
                      "ref": "Spotify.html#tracks",
                      "tf": 25
                    },
                    "Spotify.html#playlists": {
                      "ref": "Spotify.html#playlists",
                      "tf": 25
                    },
                    "Spotify.html#episodes": {
                      "ref": "Spotify.html#episodes",
                      "tf": 25
                    },
                    "Spotify.html#shows": {
                      "ref": "Spotify.html#shows",
                      "tf": 25
                    },
                    "Spotify.html#albums": {
                      "ref": "Spotify.html#albums",
                      "tf": 25
                    },
                    "Spotify.html#artists": {
                      "ref": "Spotify.html#artists",
                      "tf": 25
                    },
                    "Spotify.html#categories": {
                      "ref": "Spotify.html#categories",
                      "tf": 25
                    },
                    "Spotify.html#users": {
                      "ref": "Spotify.html#users",
                      "tf": 25
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "TrackManager.html#recommendations": {
                      "ref": "TrackManager.html#recommendations",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "k": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Spotify.html#markets": {
                        "ref": "Spotify.html#markets",
                        "tf": 712.5
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {
                    "AudioManager.html#analysis": {
                      "ref": "AudioManager.html#analysis",
                      "tf": 2.7777777777777777
                    },
                    "Track.html#starred": {
                      "ref": "Track.html#starred",
                      "tf": 5.555555555555555
                    },
                    "AlbumManager.html#saved": {
                      "ref": "AlbumManager.html#saved",
                      "tf": 6.25
                    },
                    "AlbumManager.html#save": {
                      "ref": "AlbumManager.html#save",
                      "tf": 6.25
                    },
                    "AlbumManager.html#remove": {
                      "ref": "AlbumManager.html#remove",
                      "tf": 6.25
                    },
                    "AlbumManager.html#starred": {
                      "ref": "AlbumManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "TrackManager.html#saved": {
                      "ref": "TrackManager.html#saved",
                      "tf": 6.25
                    },
                    "TrackManager.html#save": {
                      "ref": "TrackManager.html#save",
                      "tf": 6.25
                    },
                    "TrackManager.html#remove": {
                      "ref": "TrackManager.html#remove",
                      "tf": 6.25
                    },
                    "TrackManager.html#starred": {
                      "ref": "TrackManager.html#starred",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "f": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Playlist.html#modify": {
                        "ref": "Playlist.html#modify",
                        "tf": 700
                      },
                      "PlaylistManager.html#modify": {
                        "ref": "PlaylistManager.html#modify",
                        "tf": 675
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "PlayerManager.html#repeat": {
                    "ref": "PlayerManager.html#repeat",
                    "tf": 5
                  }
                }
              },
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "Spotify.html#refresher": {
                      "ref": "Spotify.html#refresher",
                      "tf": 10
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "EpisodeManager.html#save": {
                    "ref": "EpisodeManager.html#save",
                    "tf": 7.142857142857142
                  },
                  "EpisodeManager.html#remove": {
                    "ref": "EpisodeManager.html#remove",
                    "tf": 7.142857142857142
                  },
                  "EpisodeManager.html#starred": {
                    "ref": "EpisodeManager.html#starred",
                    "tf": 4.545454545454546
                  },
                  "AlbumManager.html#save": {
                    "ref": "AlbumManager.html#save",
                    "tf": 6.25
                  },
                  "AlbumManager.html#remove": {
                    "ref": "AlbumManager.html#remove",
                    "tf": 6.25
                  },
                  "AlbumManager.html#starred": {
                    "ref": "AlbumManager.html#starred",
                    "tf": 4.545454545454546
                  },
                  "PlaylistManager.html#add": {
                    "ref": "PlaylistManager.html#add",
                    "tf": 8.333333333333332
                  },
                  "PlaylistManager.html#remove": {
                    "ref": "PlaylistManager.html#remove",
                    "tf": 8.333333333333332
                  },
                  "PlaylistManager.html#followers": {
                    "ref": "PlaylistManager.html#followers",
                    "tf": 5.555555555555555
                  },
                  "ShowManager.html#save": {
                    "ref": "ShowManager.html#save",
                    "tf": 6.25
                  },
                  "ShowManager.html#remove": {
                    "ref": "ShowManager.html#remove",
                    "tf": 6.25
                  },
                  "ShowManager.html#starred": {
                    "ref": "ShowManager.html#starred",
                    "tf": 5
                  },
                  "TrackManager.html#save": {
                    "ref": "TrackManager.html#save",
                    "tf": 6.25
                  },
                  "TrackManager.html#remove": {
                    "ref": "TrackManager.html#remove",
                    "tf": 6.25
                  },
                  "TrackManager.html#starred": {
                    "ref": "TrackManager.html#starred",
                    "tf": 4.545454545454546
                  },
                  "ArtistManager.html#follow": {
                    "ref": "ArtistManager.html#follow",
                    "tf": 7.142857142857142
                  },
                  "ArtistManager.html#unfollow": {
                    "ref": "ArtistManager.html#unfollow",
                    "tf": 7.142857142857142
                  },
                  "ArtistManager.html#following": {
                    "ref": "ArtistManager.html#following",
                    "tf": 6.25
                  },
                  "UserManager.html#follow": {
                    "ref": "UserManager.html#follow",
                    "tf": 7.142857142857142
                  },
                  "UserManager.html#unfollow": {
                    "ref": "UserManager.html#unfollow",
                    "tf": 7.142857142857142
                  },
                  "UserManager.html#following": {
                    "ref": "UserManager.html#following",
                    "tf": 6.25
                  }
                }
              }
            }
          },
          "s": {
            "docs": {
              "PlayerManager.html#seek": {
                "ref": "PlayerManager.html#seek",
                "tf": 25
              }
            }
          }
        },
        "n": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {
                  "HTTPError.html#response": {
                    "ref": "HTTPError.html#response",
                    "tf": 33.33333333333333
                  },
                  "Spotify.html#refresher": {
                    "ref": "Spotify.html#refresher",
                    "tf": 10
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {
                  "PlayerManager.html#recent": {
                    "ref": "PlayerManager.html#recent",
                    "tf": 4.166666666666666
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "ApiError.html#error": {
                        "ref": "ApiError.html#error",
                        "tf": 50
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "PlayerManager.html#transfer": {
                  "ref": "PlayerManager.html#transfer",
                  "tf": 7.142857142857142
                },
                "PlayerManager.html#start": {
                  "ref": "PlayerManager.html#start",
                  "tf": 16.666666666666664
                },
                "AlbumManager.html#releases": {
                  "ref": "AlbumManager.html#releases",
                  "tf": 8.333333333333332
                }
              }
            },
            "x": {
              "docs": {},
              "t": {
                "docs": {
                  "PlayerManager.html#next": {
                    "ref": "PlayerManager.html#next",
                    "tf": 693.3333333333334
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "PlaylistManager.html#modify": {
                    "ref": "PlaylistManager.html#modify",
                    "tf": 6.25
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "t": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "Util.html": {
                    "ref": "Util.html",
                    "tf": 1916.6666666666667
                  },
                  "Spotify.html#util": {
                    "ref": "Spotify.html#util",
                    "tf": 766.6666666666666
                  }
                },
                "#": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Util.html#spotify": {
                                    "ref": "Util.html#spotify",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "j": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {
                                "Util.html#toJson": {
                                  "ref": "Util.html#toJson",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "f": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "h": {
                            "docs": {
                              "Util.html#fetch": {
                                "ref": "Util.html#fetch",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "i": {
              "docs": {},
              "q": {
                "docs": {},
                "u": {
                  "docs": {
                    "AudioManager.html#features": {
                      "ref": "AudioManager.html#features",
                      "tf": 5.555555555555555
                    },
                    "EpisodeManager.html#get": {
                      "ref": "EpisodeManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "ShowManager.html#get": {
                      "ref": "ShowManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "TrackManager.html#get": {
                      "ref": "TrackManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "ArtistManager.html#get": {
                      "ref": "ArtistManager.html#get",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "l": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "w": {
                        "docs": {
                          "Artist.html#unfollow": {
                            "ref": "Artist.html#unfollow",
                            "tf": 716.6666666666666
                          },
                          "User.html#unfollow": {
                            "ref": "User.html#unfollow",
                            "tf": 716.6666666666666
                          },
                          "Playlist.html#unfollow": {
                            "ref": "Playlist.html#unfollow",
                            "tf": 716.6666666666666
                          },
                          "PlaylistManager.html#unfollow": {
                            "ref": "PlaylistManager.html#unfollow",
                            "tf": 683.3333333333334
                          },
                          "ArtistManager.html#unfollow": {
                            "ref": "ArtistManager.html#unfollow",
                            "tf": 683.3333333333334
                          },
                          "UserManager.html#unfollow": {
                            "ref": "UserManager.html#unfollow",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {
              "CategoryManager.html#get": {
                "ref": "CategoryManager.html#get",
                "tf": 8.333333333333332
              },
              "CategoryManager.html#all": {
                "ref": "CategoryManager.html#all",
                "tf": 8.333333333333332
              }
            },
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "Artist.html#following": {
                    "ref": "Artist.html#following",
                    "tf": 8.333333333333332
                  },
                  "User.html": {
                    "ref": "User.html",
                    "tf": 1925
                  },
                  "User.html#follow": {
                    "ref": "User.html#follow",
                    "tf": 16.666666666666664
                  },
                  "User.html#unfollow": {
                    "ref": "User.html#unfollow",
                    "tf": 16.666666666666664
                  },
                  "User.html#following": {
                    "ref": "User.html#following",
                    "tf": 16.666666666666664
                  },
                  "Playlist.html#following": {
                    "ref": "Playlist.html#following",
                    "tf": 33.33333333333333
                  },
                  "EpisodeManager.html#users": {
                    "ref": "EpisodeManager.html#users",
                    "tf": 683.3333333333334
                  },
                  "PlaylistManager.html#get": {
                    "ref": "PlaylistManager.html#get",
                    "tf": 12.5
                  },
                  "PlaylistManager.html#modify": {
                    "ref": "PlaylistManager.html#modify",
                    "tf": 6.25
                  },
                  "PlaylistManager.html#tracks": {
                    "ref": "PlaylistManager.html#tracks",
                    "tf": 7.142857142857142
                  },
                  "PlaylistManager.html#users": {
                    "ref": "PlaylistManager.html#users",
                    "tf": 682.1428571428571
                  },
                  "PlaylistManager.html#follow": {
                    "ref": "PlaylistManager.html#follow",
                    "tf": 10
                  },
                  "PlaylistManager.html#unfollow": {
                    "ref": "PlaylistManager.html#unfollow",
                    "tf": 10
                  },
                  "PlaylistManager.html#followers": {
                    "ref": "PlaylistManager.html#followers",
                    "tf": 30.555555555555557
                  },
                  "PlaylistManager.html#create": {
                    "ref": "PlaylistManager.html#create",
                    "tf": 12.5
                  },
                  "ShowManager.html#users": {
                    "ref": "ShowManager.html#users",
                    "tf": 683.3333333333334
                  },
                  "ArtistManager.html#follow": {
                    "ref": "ArtistManager.html#follow",
                    "tf": 7.142857142857142
                  },
                  "ArtistManager.html#unfollow": {
                    "ref": "ArtistManager.html#unfollow",
                    "tf": 7.142857142857142
                  },
                  "ArtistManager.html#following": {
                    "ref": "ArtistManager.html#following",
                    "tf": 31.25
                  },
                  "UserManager.html": {
                    "ref": "UserManager.html",
                    "tf": 16.666666666666664
                  },
                  "UserManager.html#get": {
                    "ref": "UserManager.html#get",
                    "tf": 10
                  },
                  "UserManager.html#follow": {
                    "ref": "UserManager.html#follow",
                    "tf": 14.285714285714285
                  },
                  "UserManager.html#unfollow": {
                    "ref": "UserManager.html#unfollow",
                    "tf": 14.285714285714285
                  },
                  "UserManager.html#following": {
                    "ref": "UserManager.html#following",
                    "tf": 37.5
                  },
                  "UserManager.html#me": {
                    "ref": "UserManager.html#me",
                    "tf": 5.555555555555555
                  },
                  "Spotify.html#users": {
                    "ref": "Spotify.html#users",
                    "tf": 725
                  }
                },
                "'": {
                  "docs": {
                    "Album.html#starred": {
                      "ref": "Album.html#starred",
                      "tf": 6.25
                    },
                    "Episode.html#starred": {
                      "ref": "Episode.html#starred",
                      "tf": 6.25
                    },
                    "Playlist.html#following": {
                      "ref": "Playlist.html#following",
                      "tf": 10
                    },
                    "Show.html#starred": {
                      "ref": "Show.html#starred",
                      "tf": 6.25
                    },
                    "Track.html#starred": {
                      "ref": "Track.html#starred",
                      "tf": 5.555555555555555
                    },
                    "EpisodeManager.html#users": {
                      "ref": "EpisodeManager.html#users",
                      "tf": 7.142857142857142
                    },
                    "EpisodeManager.html#save": {
                      "ref": "EpisodeManager.html#save",
                      "tf": 7.142857142857142
                    },
                    "EpisodeManager.html#remove": {
                      "ref": "EpisodeManager.html#remove",
                      "tf": 7.142857142857142
                    },
                    "EpisodeManager.html#starred": {
                      "ref": "EpisodeManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "PlayerManager.html#state": {
                      "ref": "PlayerManager.html#state",
                      "tf": 10
                    },
                    "PlayerManager.html#current": {
                      "ref": "PlayerManager.html#current",
                      "tf": 7.142857142857142
                    },
                    "PlayerManager.html#resume": {
                      "ref": "PlayerManager.html#resume",
                      "tf": 8.333333333333332
                    },
                    "PlayerManager.html#pause": {
                      "ref": "PlayerManager.html#pause",
                      "tf": 12.5
                    },
                    "PlayerManager.html#repeat": {
                      "ref": "PlayerManager.html#repeat",
                      "tf": 5
                    },
                    "PlayerManager.html#recent": {
                      "ref": "PlayerManager.html#recent",
                      "tf": 4.166666666666666
                    },
                    "PlayerManager.html#queue": {
                      "ref": "PlayerManager.html#queue",
                      "tf": 7.142857142857142
                    },
                    "AlbumManager.html#saved": {
                      "ref": "AlbumManager.html#saved",
                      "tf": 6.25
                    },
                    "AlbumManager.html#save": {
                      "ref": "AlbumManager.html#save",
                      "tf": 6.25
                    },
                    "AlbumManager.html#remove": {
                      "ref": "AlbumManager.html#remove",
                      "tf": 6.25
                    },
                    "AlbumManager.html#starred": {
                      "ref": "AlbumManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "PlaylistManager.html#add": {
                      "ref": "PlaylistManager.html#add",
                      "tf": 8.333333333333332
                    },
                    "PlaylistManager.html#remove": {
                      "ref": "PlaylistManager.html#remove",
                      "tf": 8.333333333333332
                    },
                    "ShowManager.html#users": {
                      "ref": "ShowManager.html#users",
                      "tf": 7.142857142857142
                    },
                    "ShowManager.html#save": {
                      "ref": "ShowManager.html#save",
                      "tf": 6.25
                    },
                    "ShowManager.html#remove": {
                      "ref": "ShowManager.html#remove",
                      "tf": 6.25
                    },
                    "ShowManager.html#starred": {
                      "ref": "ShowManager.html#starred",
                      "tf": 5
                    },
                    "TrackManager.html#saved": {
                      "ref": "TrackManager.html#saved",
                      "tf": 6.25
                    },
                    "TrackManager.html#save": {
                      "ref": "TrackManager.html#save",
                      "tf": 6.25
                    },
                    "TrackManager.html#remove": {
                      "ref": "TrackManager.html#remove",
                      "tf": 6.25
                    },
                    "TrackManager.html#starred": {
                      "ref": "TrackManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "UserManager.html#top": {
                      "ref": "UserManager.html#top",
                      "tf": 6.25
                    },
                    "UserManager.html#followed": {
                      "ref": "UserManager.html#followed",
                      "tf": 12.5
                    },
                    "UserManager.html#me": {
                      "ref": "UserManager.html#me",
                      "tf": 5.555555555555555
                    }
                  }
                },
                "#": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "User.html#spotify": {
                                    "ref": "User.html#spotify",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "f": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "w": {
                              "docs": {
                                "User.html#follow": {
                                  "ref": "User.html#follow",
                                  "tf": 1150
                                },
                                "User.html#following": {
                                  "ref": "User.html#following",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "u": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "f": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "w": {
                                  "docs": {
                                    "User.html#unfollow": {
                                      "ref": "User.html#unfollow",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "’": {
                  "docs": {
                    "PlayerManager.html#devices": {
                      "ref": "PlayerManager.html#devices",
                      "tf": 12.5
                    },
                    "PlayerManager.html#next": {
                      "ref": "PlayerManager.html#next",
                      "tf": 10
                    },
                    "PlayerManager.html#back": {
                      "ref": "PlayerManager.html#back",
                      "tf": 10
                    },
                    "PlayerManager.html#seek": {
                      "ref": "PlayerManager.html#seek",
                      "tf": 7.142857142857142
                    },
                    "PlayerManager.html#volume": {
                      "ref": "PlayerManager.html#volume",
                      "tf": 8.333333333333332
                    },
                    "PlayerManager.html#shuffle": {
                      "ref": "PlayerManager.html#shuffle",
                      "tf": 12.5
                    }
                  }
                },
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "g": {
                          "docs": {
                            "UserManager.html": {
                              "ref": "UserManager.html",
                              "tf": 1900
                            },
                            "Spotify.html#users": {
                              "ref": "Spotify.html#users",
                              "tf": 50
                            }
                          },
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "#": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "f": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "UserManager.html#spotify": {
                                                  "ref": "UserManager.html#spotify",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "g": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "UserManager.html#get": {
                                          "ref": "UserManager.html#get",
                                          "tf": 1300
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "p": {
                                      "docs": {
                                        "UserManager.html#top": {
                                          "ref": "UserManager.html#top",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                },
                                "f": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "w": {
                                            "docs": {
                                              "UserManager.html#followed": {
                                                "ref": "UserManager.html#followed",
                                                "tf": 1150
                                              },
                                              "UserManager.html#follow": {
                                                "ref": "UserManager.html#follow",
                                                "tf": 1150
                                              },
                                              "UserManager.html#following": {
                                                "ref": "UserManager.html#following",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "u": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "w": {
                                                "docs": {
                                                  "UserManager.html#unfollow": {
                                                    "ref": "UserManager.html#unfollow",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "m": {
                                  "docs": {
                                    "UserManager.html#me": {
                                      "ref": "UserManager.html#me",
                                      "tf": 1300
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "UserManager.html#me": {
                          "ref": "UserManager.html#me",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {
                "Playlist.html#add": {
                  "ref": "Playlist.html#add",
                  "tf": 25
                },
                "Playlist.html#remove": {
                  "ref": "Playlist.html#remove",
                  "tf": 25
                },
                "PlayerManager.html#start": {
                  "ref": "PlayerManager.html#start",
                  "tf": 25
                },
                "PlayerManager.html#queue": {
                  "ref": "PlayerManager.html#queue",
                  "tf": 25
                },
                "PlaylistManager.html#add": {
                  "ref": "PlaylistManager.html#add",
                  "tf": 20
                },
                "PlaylistManager.html#remove": {
                  "ref": "PlaylistManager.html#remove",
                  "tf": 20
                }
              }
            }
          },
          "p": {
            "docs": {},
            "l": {
              "docs": {},
              "o": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Playlist.html#cover": {
                        "ref": "Playlist.html#cover",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "PlaylistManager.html#update": {
                      "ref": "PlaylistManager.html#update",
                      "tf": 675
                    }
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "Util.html#toJson": {
                    "ref": "Util.html#toJson",
                    "tf": 12.5
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "PlayerManager.html#current": {
                        "ref": "PlayerManager.html#current",
                        "tf": 7.142857142857142
                      }
                    },
                    "|": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Util.html#toJson": {
                                "ref": "Util.html#toJson",
                                "tf": 33.33333333333333
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Util.html#fetch": {
                        "ref": "Util.html#fetch",
                        "tf": 14.285714285714285
                      },
                      "Album.html#play": {
                        "ref": "Album.html#play",
                        "tf": 33.33333333333333
                      },
                      "Artist.html#albums": {
                        "ref": "Artist.html#albums",
                        "tf": 33.33333333333333
                      },
                      "Playlist.html#play": {
                        "ref": "Playlist.html#play",
                        "tf": 33.33333333333333
                      },
                      "Playlist.html#modify": {
                        "ref": "Playlist.html#modify",
                        "tf": 33.33333333333333
                      },
                      "Show.html#play": {
                        "ref": "Show.html#play",
                        "tf": 33.33333333333333
                      },
                      "CategoryManager.html#all": {
                        "ref": "CategoryManager.html#all",
                        "tf": 50
                      },
                      "EpisodeManager.html#users": {
                        "ref": "EpisodeManager.html#users",
                        "tf": 33.33333333333333
                      },
                      "EpisodeManager.html#search": {
                        "ref": "EpisodeManager.html#search",
                        "tf": 25
                      },
                      "PlayerManager.html#start": {
                        "ref": "PlayerManager.html#start",
                        "tf": 25
                      },
                      "PlayerManager.html#repeat": {
                        "ref": "PlayerManager.html#repeat",
                        "tf": 5
                      },
                      "PlayerManager.html#recent": {
                        "ref": "PlayerManager.html#recent",
                        "tf": 33.33333333333333
                      },
                      "AlbumManager.html#tracks": {
                        "ref": "AlbumManager.html#tracks",
                        "tf": 25
                      },
                      "AlbumManager.html#saved": {
                        "ref": "AlbumManager.html#saved",
                        "tf": 33.33333333333333
                      },
                      "AlbumManager.html#releases": {
                        "ref": "AlbumManager.html#releases",
                        "tf": 33.33333333333333
                      },
                      "AlbumManager.html#search": {
                        "ref": "AlbumManager.html#search",
                        "tf": 25
                      },
                      "PlaylistManager.html#get": {
                        "ref": "PlaylistManager.html#get",
                        "tf": 33.33333333333333
                      },
                      "PlaylistManager.html#modify": {
                        "ref": "PlaylistManager.html#modify",
                        "tf": 25
                      },
                      "PlaylistManager.html#update": {
                        "ref": "PlaylistManager.html#update",
                        "tf": 25
                      },
                      "PlaylistManager.html#tracks": {
                        "ref": "PlaylistManager.html#tracks",
                        "tf": 25
                      },
                      "PlaylistManager.html#users": {
                        "ref": "PlaylistManager.html#users",
                        "tf": 25
                      },
                      "PlaylistManager.html#create": {
                        "ref": "PlaylistManager.html#create",
                        "tf": 25
                      },
                      "PlaylistManager.html#featured": {
                        "ref": "PlaylistManager.html#featured",
                        "tf": 33.33333333333333
                      },
                      "PlaylistManager.html#categories": {
                        "ref": "PlaylistManager.html#categories",
                        "tf": 25
                      },
                      "PlaylistManager.html#search": {
                        "ref": "PlaylistManager.html#search",
                        "tf": 25
                      },
                      "ShowManager.html#episodes": {
                        "ref": "ShowManager.html#episodes",
                        "tf": 25
                      },
                      "ShowManager.html#users": {
                        "ref": "ShowManager.html#users",
                        "tf": 33.33333333333333
                      },
                      "ShowManager.html#search": {
                        "ref": "ShowManager.html#search",
                        "tf": 25
                      },
                      "TrackManager.html#saved": {
                        "ref": "TrackManager.html#saved",
                        "tf": 33.33333333333333
                      },
                      "TrackManager.html#search": {
                        "ref": "TrackManager.html#search",
                        "tf": 25
                      },
                      "TrackManager.html#recommendations": {
                        "ref": "TrackManager.html#recommendations",
                        "tf": 33.33333333333333
                      },
                      "ArtistManager.html#search": {
                        "ref": "ArtistManager.html#search",
                        "tf": 25
                      },
                      "UserManager.html#top": {
                        "ref": "UserManager.html#top",
                        "tf": 25
                      },
                      "UserManager.html#followed": {
                        "ref": "UserManager.html#followed",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "EpisodeManager.html#save": {
                "ref": "EpisodeManager.html#save",
                "tf": 7.142857142857142
              },
              "EpisodeManager.html#remove": {
                "ref": "EpisodeManager.html#remove",
                "tf": 7.142857142857142
              },
              "EpisodeManager.html#starred": {
                "ref": "EpisodeManager.html#starred",
                "tf": 4.545454545454546
              },
              "AlbumManager.html#save": {
                "ref": "AlbumManager.html#save",
                "tf": 6.25
              },
              "AlbumManager.html#remove": {
                "ref": "AlbumManager.html#remove",
                "tf": 6.25
              },
              "AlbumManager.html#starred": {
                "ref": "AlbumManager.html#starred",
                "tf": 4.545454545454546
              },
              "PlaylistManager.html#add": {
                "ref": "PlaylistManager.html#add",
                "tf": 8.333333333333332
              },
              "PlaylistManager.html#remove": {
                "ref": "PlaylistManager.html#remove",
                "tf": 8.333333333333332
              },
              "PlaylistManager.html#followers": {
                "ref": "PlaylistManager.html#followers",
                "tf": 5.555555555555555
              },
              "ShowManager.html#save": {
                "ref": "ShowManager.html#save",
                "tf": 6.25
              },
              "ShowManager.html#remove": {
                "ref": "ShowManager.html#remove",
                "tf": 6.25
              },
              "ShowManager.html#starred": {
                "ref": "ShowManager.html#starred",
                "tf": 5
              },
              "TrackManager.html#save": {
                "ref": "TrackManager.html#save",
                "tf": 6.25
              },
              "TrackManager.html#remove": {
                "ref": "TrackManager.html#remove",
                "tf": 6.25
              },
              "TrackManager.html#starred": {
                "ref": "TrackManager.html#starred",
                "tf": 4.545454545454546
              },
              "ArtistManager.html#follow": {
                "ref": "ArtistManager.html#follow",
                "tf": 7.142857142857142
              },
              "ArtistManager.html#unfollow": {
                "ref": "ArtistManager.html#unfollow",
                "tf": 7.142857142857142
              },
              "ArtistManager.html#following": {
                "ref": "ArtistManager.html#following",
                "tf": 6.25
              },
              "UserManager.html#follow": {
                "ref": "UserManager.html#follow",
                "tf": 7.142857142857142
              },
              "UserManager.html#unfollow": {
                "ref": "UserManager.html#unfollow",
                "tf": 7.142857142857142
              },
              "UserManager.html#following": {
                "ref": "UserManager.html#following",
                "tf": 6.25
              }
            }
          },
          "w": {
            "docs": {},
            "n": {
              "docs": {
                "PlaylistManager.html#get": {
                  "ref": "PlaylistManager.html#get",
                  "tf": 12.5
                },
                "PlaylistManager.html#tracks": {
                  "ref": "PlaylistManager.html#tracks",
                  "tf": 7.142857142857142
                },
                "PlaylistManager.html#users": {
                  "ref": "PlaylistManager.html#users",
                  "tf": 7.142857142857142
                }
              }
            }
          },
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "2": {
                    "docs": {
                      "Spotify.html#refresher": {
                        "ref": "Spotify.html#refresher",
                        "tf": 10
                      }
                    }
                  },
                  "docs": {}
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "o": {
            "docs": {},
            "j": {
              "docs": {},
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Util.html#toJson": {
                        "ref": "Util.html#toJson",
                        "tf": 683.3333333333334
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {
                "Artist.html#top": {
                  "ref": "Artist.html#top",
                  "tf": 695.8333333333334
                },
                "ArtistManager.html#top": {
                  "ref": "ArtistManager.html#top",
                  "tf": 682.1428571428571
                },
                "UserManager.html#top": {
                  "ref": "UserManager.html#top",
                  "tf": 681.25
                }
              }
            },
            "g": {
              "docs": {},
              "g": {
                "docs": {},
                "l": {
                  "docs": {
                    "PlayerManager.html#shuffle": {
                      "ref": "PlayerManager.html#shuffle",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "k": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "Spotify.html#access_token": {
                      "ref": "Spotify.html#access_token",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "AudioManager.html": {
                      "ref": "AudioManager.html",
                      "tf": 16.666666666666664
                    },
                    "AudioManager.html#features": {
                      "ref": "AudioManager.html#features",
                      "tf": 5.555555555555555
                    },
                    "AudioManager.html#analysis": {
                      "ref": "AudioManager.html#analysis",
                      "tf": 2.7777777777777777
                    },
                    "Artist.html#top": {
                      "ref": "Artist.html#top",
                      "tf": 12.5
                    },
                    "Playlist.html#add": {
                      "ref": "Playlist.html#add",
                      "tf": 12.5
                    },
                    "Playlist.html#remove": {
                      "ref": "Playlist.html#remove",
                      "tf": 12.5
                    },
                    "Track.html": {
                      "ref": "Track.html",
                      "tf": 1925
                    },
                    "Track.html#audio": {
                      "ref": "Track.html#audio",
                      "tf": 16.666666666666664
                    },
                    "Track.html#save": {
                      "ref": "Track.html#save",
                      "tf": 16.666666666666664
                    },
                    "Track.html#remove": {
                      "ref": "Track.html#remove",
                      "tf": 16.666666666666664
                    },
                    "Track.html#queue": {
                      "ref": "Track.html#queue",
                      "tf": 16.666666666666664
                    },
                    "PlayerManager.html#next": {
                      "ref": "PlayerManager.html#next",
                      "tf": 10
                    },
                    "PlayerManager.html#back": {
                      "ref": "PlayerManager.html#back",
                      "tf": 10
                    },
                    "PlayerManager.html#seek": {
                      "ref": "PlayerManager.html#seek",
                      "tf": 7.142857142857142
                    },
                    "PlayerManager.html#repeat": {
                      "ref": "PlayerManager.html#repeat",
                      "tf": 5
                    },
                    "PlayerManager.html#recent": {
                      "ref": "PlayerManager.html#recent",
                      "tf": 8.333333333333332
                    },
                    "AlbumManager.html#tracks": {
                      "ref": "AlbumManager.html#tracks",
                      "tf": 685
                    },
                    "PlaylistManager.html#tracks": {
                      "ref": "PlaylistManager.html#tracks",
                      "tf": 675
                    },
                    "TrackManager.html": {
                      "ref": "TrackManager.html",
                      "tf": 16.666666666666664
                    },
                    "TrackManager.html#get": {
                      "ref": "TrackManager.html#get",
                      "tf": 5.555555555555555
                    },
                    "TrackManager.html#save": {
                      "ref": "TrackManager.html#save",
                      "tf": 6.25
                    },
                    "TrackManager.html#remove": {
                      "ref": "TrackManager.html#remove",
                      "tf": 6.25
                    },
                    "TrackManager.html#starred": {
                      "ref": "TrackManager.html#starred",
                      "tf": 4.545454545454546
                    },
                    "TrackManager.html#search": {
                      "ref": "TrackManager.html#search",
                      "tf": 12.5
                    },
                    "TrackManager.html#recommendations": {
                      "ref": "TrackManager.html#recommendations",
                      "tf": 3.8461538461538463
                    },
                    "ArtistManager.html#top": {
                      "ref": "ArtistManager.html#top",
                      "tf": 7.142857142857142
                    },
                    "UserManager.html#top": {
                      "ref": "UserManager.html#top",
                      "tf": 6.25
                    },
                    "Spotify.html#tracks": {
                      "ref": "Spotify.html#tracks",
                      "tf": 725
                    }
                  },
                  "’": {
                    "docs": {
                      "AudioManager.html#analysis": {
                        "ref": "AudioManager.html#analysis",
                        "tf": 2.7777777777777777
                      }
                    }
                  },
                  "'": {
                    "docs": {
                      "Audio.html": {
                        "ref": "Audio.html",
                        "tf": 16.666666666666664
                      },
                      "Audio.html#features": {
                        "ref": "Audio.html#features",
                        "tf": 12.5
                      },
                      "Audio.html#analysis": {
                        "ref": "Audio.html#analysis",
                        "tf": 12.5
                      }
                    }
                  },
                  "#": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Track.html#spotify": {
                                      "ref": "Track.html#spotify",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "a": {
                        "docs": {},
                        "v": {
                          "docs": {
                            "Track.html#save": {
                              "ref": "Track.html#save",
                              "tf": 1150
                            }
                          }
                        }
                      },
                      "t": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {
                              "Track.html#starred": {
                                "ref": "Track.html#starred",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {
                                "Track.html#audio": {
                                  "ref": "Track.html#audio",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "v": {
                              "docs": {
                                "Track.html#remove": {
                                  "ref": "Track.html#remove",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "q": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "u": {
                            "docs": {
                              "Track.html#queue": {
                                "ref": "Track.html#queue",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "g": {
                            "docs": {
                              "TrackManager.html": {
                                "ref": "TrackManager.html",
                                "tf": 1900
                              },
                              "Spotify.html#tracks": {
                                "ref": "Spotify.html#tracks",
                                "tf": 50
                              }
                            },
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "#": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "TrackManager.html#spotify": {
                                                    "ref": "TrackManager.html#spotify",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "a": {
                                      "docs": {},
                                      "v": {
                                        "docs": {
                                          "TrackManager.html#saved": {
                                            "ref": "TrackManager.html#saved",
                                            "tf": 1150
                                          },
                                          "TrackManager.html#save": {
                                            "ref": "TrackManager.html#save",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {
                                            "TrackManager.html#starred": {
                                              "ref": "TrackManager.html#starred",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "h": {
                                              "docs": {
                                                "TrackManager.html#search": {
                                                  "ref": "TrackManager.html#search",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "a": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "o": {
                                            "docs": {
                                              "TrackManager.html#audio": {
                                                "ref": "TrackManager.html#audio",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "TrackManager.html#get": {
                                            "ref": "TrackManager.html#get",
                                            "tf": 1300
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "v": {
                                            "docs": {
                                              "TrackManager.html#remove": {
                                                "ref": "TrackManager.html#remove",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "c": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "TrackManager.html#recommendations": {
                                                        "ref": "TrackManager.html#recommendations",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "n": {
                "docs": {},
                "s": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "PlayerManager.html#transfer": {
                            "ref": "PlayerManager.html#transfer",
                            "tf": 682.1428571428571
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "r": {
                  "docs": {
                    "AudioManager.html#analysis": {
                      "ref": "AudioManager.html#analysis",
                      "tf": 2.7777777777777777
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "g": {
              "docs": {
                "CategoryManager.html#get": {
                  "ref": "CategoryManager.html#get",
                  "tf": 8.333333333333332
                },
                "CategoryManager.html#all": {
                  "ref": "CategoryManager.html#all",
                  "tf": 8.333333333333332
                },
                "PlaylistManager.html#categories": {
                  "ref": "PlaylistManager.html#categories",
                  "tf": 8.333333333333332
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {
                  "PlayerManager.html#state": {
                    "ref": "PlayerManager.html#state",
                    "tf": 33.33333333333333
                  },
                  "PlayerManager.html#current": {
                    "ref": "PlayerManager.html#current",
                    "tf": 33.33333333333333
                  },
                  "UserManager.html#top": {
                    "ref": "UserManager.html#top",
                    "tf": 25
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "Util.html#fetch": {
                    "ref": "Util.html#fetch",
                    "tf": 14.285714285714285
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "s": {
                "docs": {
                  "PlayerManager.html#pause": {
                    "ref": "PlayerManager.html#pause",
                    "tf": 695.8333333333334
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PlaylistManager.html#update": {
                          "ref": "PlaylistManager.html#update",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {
                              "PlaylistManager.html#categories": {
                                "ref": "PlaylistManager.html#categories",
                                "tf": 8.333333333333332
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              ";": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Util.html#fetch": {
                                          "ref": "Util.html#fetch",
                                          "tf": 14.285714285714285
                                        }
                                      }
                                    }
                                  }
                                },
                                "(": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "|": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "|": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "p": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  ")": {
                                                                                    "docs": {},
                                                                                    "&": {
                                                                                      "docs": {},
                                                                                      "g": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {
                                                                                            "AudioManager.html#features": {
                                                                                              "ref": "AudioManager.html#features",
                                                                                              "tf": 33.33333333333333
                                                                                            },
                                                                                            "AudioManager.html#analysis": {
                                                                                              "ref": "AudioManager.html#analysis",
                                                                                              "tf": 33.33333333333333
                                                                                            },
                                                                                            "Audio.html#features": {
                                                                                              "ref": "Audio.html#features",
                                                                                              "tf": 50
                                                                                            },
                                                                                            "Audio.html#analysis": {
                                                                                              "ref": "Audio.html#analysis",
                                                                                              "tf": 50
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "r": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "y": {
                                            "docs": {},
                                            ".": {
                                              "docs": {},
                                              "&": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    ";": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "b": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "&": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      ";": {
                                                                        "docs": {},
                                                                        "|": {
                                                                          "docs": {},
                                                                          "h": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "p": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "o": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "|": {
                                                                                              "docs": {},
                                                                                              "a": {
                                                                                                "docs": {},
                                                                                                "p": {
                                                                                                  "docs": {},
                                                                                                  "i": {
                                                                                                    "docs": {},
                                                                                                    "e": {
                                                                                                      "docs": {},
                                                                                                      "r": {
                                                                                                        "docs": {},
                                                                                                        "r": {
                                                                                                          "docs": {},
                                                                                                          "o": {
                                                                                                            "docs": {},
                                                                                                            "r": {
                                                                                                              "docs": {},
                                                                                                              ")": {
                                                                                                                "docs": {},
                                                                                                                "&": {
                                                                                                                  "docs": {},
                                                                                                                  "g": {
                                                                                                                    "docs": {},
                                                                                                                    "t": {
                                                                                                                      "docs": {
                                                                                                                        "Artist.html#albums": {
                                                                                                                          "ref": "Artist.html#albums",
                                                                                                                          "tf": 33.33333333333333
                                                                                                                        },
                                                                                                                        "AlbumManager.html#saved": {
                                                                                                                          "ref": "AlbumManager.html#saved",
                                                                                                                          "tf": 33.33333333333333
                                                                                                                        },
                                                                                                                        "AlbumManager.html#releases": {
                                                                                                                          "ref": "AlbumManager.html#releases",
                                                                                                                          "tf": 33.33333333333333
                                                                                                                        },
                                                                                                                        "AlbumManager.html#search": {
                                                                                                                          "ref": "AlbumManager.html#search",
                                                                                                                          "tf": 25
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "r": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "&": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        ";": {
                                                                          "docs": {},
                                                                          "|": {
                                                                            "docs": {},
                                                                            "h": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "p": {
                                                                                    "docs": {},
                                                                                    "e": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "o": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "|": {
                                                                                                "docs": {},
                                                                                                "a": {
                                                                                                  "docs": {},
                                                                                                  "p": {
                                                                                                    "docs": {},
                                                                                                    "i": {
                                                                                                      "docs": {},
                                                                                                      "e": {
                                                                                                        "docs": {},
                                                                                                        "r": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            "o": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                ")": {
                                                                                                                  "docs": {},
                                                                                                                  "&": {
                                                                                                                    "docs": {},
                                                                                                                    "g": {
                                                                                                                      "docs": {},
                                                                                                                      "t": {
                                                                                                                        "docs": {
                                                                                                                          "Artist.html#related": {
                                                                                                                            "ref": "Artist.html#related",
                                                                                                                            "tf": 50
                                                                                                                          },
                                                                                                                          "ArtistManager.html#related": {
                                                                                                                            "ref": "ArtistManager.html#related",
                                                                                                                            "tf": 33.33333333333333
                                                                                                                          },
                                                                                                                          "ArtistManager.html#search": {
                                                                                                                            "ref": "ArtistManager.html#search",
                                                                                                                            "tf": 25
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "a": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "a": {
                                                                                    "docs": {},
                                                                                    "y": {
                                                                                      "docs": {},
                                                                                      ".": {
                                                                                        "docs": {},
                                                                                        "&": {
                                                                                          "docs": {},
                                                                                          "l": {
                                                                                            "docs": {},
                                                                                            "t": {
                                                                                              "docs": {},
                                                                                              ";": {
                                                                                                "docs": {},
                                                                                                "t": {
                                                                                                  "docs": {},
                                                                                                  "r": {
                                                                                                    "docs": {},
                                                                                                    "a": {
                                                                                                      "docs": {},
                                                                                                      "c": {
                                                                                                        "docs": {},
                                                                                                        "k": {
                                                                                                          "docs": {},
                                                                                                          "&": {
                                                                                                            "docs": {},
                                                                                                            "g": {
                                                                                                              "docs": {},
                                                                                                              "t": {
                                                                                                                "docs": {},
                                                                                                                ";": {
                                                                                                                  "docs": {},
                                                                                                                  "|": {
                                                                                                                    "docs": {},
                                                                                                                    "h": {
                                                                                                                      "docs": {},
                                                                                                                      "t": {
                                                                                                                        "docs": {},
                                                                                                                        "t": {
                                                                                                                          "docs": {},
                                                                                                                          "p": {
                                                                                                                            "docs": {},
                                                                                                                            "e": {
                                                                                                                              "docs": {},
                                                                                                                              "r": {
                                                                                                                                "docs": {},
                                                                                                                                "r": {
                                                                                                                                  "docs": {},
                                                                                                                                  "o": {
                                                                                                                                    "docs": {},
                                                                                                                                    "r": {
                                                                                                                                      "docs": {},
                                                                                                                                      "|": {
                                                                                                                                        "docs": {},
                                                                                                                                        "a": {
                                                                                                                                          "docs": {},
                                                                                                                                          "p": {
                                                                                                                                            "docs": {},
                                                                                                                                            "i": {
                                                                                                                                              "docs": {},
                                                                                                                                              "e": {
                                                                                                                                                "docs": {},
                                                                                                                                                "r": {
                                                                                                                                                  "docs": {},
                                                                                                                                                  "r": {
                                                                                                                                                    "docs": {},
                                                                                                                                                    "o": {
                                                                                                                                                      "docs": {},
                                                                                                                                                      "r": {
                                                                                                                                                        "docs": {},
                                                                                                                                                        ")": {
                                                                                                                                                          "docs": {},
                                                                                                                                                          "&": {
                                                                                                                                                            "docs": {},
                                                                                                                                                            "g": {
                                                                                                                                                              "docs": {},
                                                                                                                                                              "t": {
                                                                                                                                                                "docs": {
                                                                                                                                                                  "UserManager.html#top": {
                                                                                                                                                                    "ref": "UserManager.html#top",
                                                                                                                                                                    "tf": 25
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "b": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "l": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "n": {
                                                                    "docs": {},
                                                                    "&": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {},
                                                                          ";": {
                                                                            "docs": {},
                                                                            "|": {
                                                                              "docs": {},
                                                                              "h": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "p": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "o": {
                                                                                              "docs": {},
                                                                                              "r": {
                                                                                                "docs": {},
                                                                                                "|": {
                                                                                                  "docs": {},
                                                                                                  "a": {
                                                                                                    "docs": {},
                                                                                                    "p": {
                                                                                                      "docs": {},
                                                                                                      "i": {
                                                                                                        "docs": {},
                                                                                                        "e": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            "r": {
                                                                                                              "docs": {},
                                                                                                              "o": {
                                                                                                                "docs": {},
                                                                                                                "r": {
                                                                                                                  "docs": {},
                                                                                                                  ")": {
                                                                                                                    "docs": {},
                                                                                                                    "&": {
                                                                                                                      "docs": {},
                                                                                                                      "g": {
                                                                                                                        "docs": {},
                                                                                                                        "t": {
                                                                                                                          "docs": {
                                                                                                                            "Artist.html#following": {
                                                                                                                              "ref": "Artist.html#following",
                                                                                                                              "tf": 50
                                                                                                                            },
                                                                                                                            "User.html#following": {
                                                                                                                              "ref": "User.html#following",
                                                                                                                              "tf": 50
                                                                                                                            },
                                                                                                                            "Playlist.html#following": {
                                                                                                                              "ref": "Playlist.html#following",
                                                                                                                              "tf": 33.33333333333333
                                                                                                                            },
                                                                                                                            "Show.html#starred": {
                                                                                                                              "ref": "Show.html#starred",
                                                                                                                              "tf": 50
                                                                                                                            },
                                                                                                                            "Track.html#starred": {
                                                                                                                              "ref": "Track.html#starred",
                                                                                                                              "tf": 50
                                                                                                                            },
                                                                                                                            "EpisodeManager.html#starred": {
                                                                                                                              "ref": "EpisodeManager.html#starred",
                                                                                                                              "tf": 33.33333333333333
                                                                                                                            },
                                                                                                                            "AlbumManager.html#starred": {
                                                                                                                              "ref": "AlbumManager.html#starred",
                                                                                                                              "tf": 33.33333333333333
                                                                                                                            },
                                                                                                                            "TrackManager.html#starred": {
                                                                                                                              "ref": "TrackManager.html#starred",
                                                                                                                              "tf": 33.33333333333333
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "t": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "k": {
                                                                "docs": {},
                                                                "&": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      ";": {
                                                                        "docs": {},
                                                                        "|": {
                                                                          "docs": {},
                                                                          "h": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "p": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "o": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "|": {
                                                                                              "docs": {},
                                                                                              "a": {
                                                                                                "docs": {},
                                                                                                "p": {
                                                                                                  "docs": {},
                                                                                                  "i": {
                                                                                                    "docs": {},
                                                                                                    "e": {
                                                                                                      "docs": {},
                                                                                                      "r": {
                                                                                                        "docs": {},
                                                                                                        "r": {
                                                                                                          "docs": {},
                                                                                                          "o": {
                                                                                                            "docs": {},
                                                                                                            "r": {
                                                                                                              "docs": {},
                                                                                                              ")": {
                                                                                                                "docs": {},
                                                                                                                "&": {
                                                                                                                  "docs": {},
                                                                                                                  "g": {
                                                                                                                    "docs": {},
                                                                                                                    "t": {
                                                                                                                      "docs": {
                                                                                                                        "Artist.html#top": {
                                                                                                                          "ref": "Artist.html#top",
                                                                                                                          "tf": 33.33333333333333
                                                                                                                        },
                                                                                                                        "PlayerManager.html#recent": {
                                                                                                                          "ref": "PlayerManager.html#recent",
                                                                                                                          "tf": 33.33333333333333
                                                                                                                        },
                                                                                                                        "AlbumManager.html#tracks": {
                                                                                                                          "ref": "AlbumManager.html#tracks",
                                                                                                                          "tf": 25
                                                                                                                        },
                                                                                                                        "PlaylistManager.html#tracks": {
                                                                                                                          "ref": "PlaylistManager.html#tracks",
                                                                                                                          "tf": 25
                                                                                                                        },
                                                                                                                        "TrackManager.html#saved": {
                                                                                                                          "ref": "TrackManager.html#saved",
                                                                                                                          "tf": 33.33333333333333
                                                                                                                        },
                                                                                                                        "TrackManager.html#search": {
                                                                                                                          "ref": "TrackManager.html#search",
                                                                                                                          "tf": 25
                                                                                                                        },
                                                                                                                        "ArtistManager.html#top": {
                                                                                                                          "ref": "ArtistManager.html#top",
                                                                                                                          "tf": 25
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "s": {
                                                                  "docs": {},
                                                                  "&": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        ";": {
                                                                          "docs": {},
                                                                          "|": {
                                                                            "docs": {},
                                                                            "h": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "p": {
                                                                                    "docs": {},
                                                                                    "e": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "o": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "|": {
                                                                                                "docs": {},
                                                                                                "a": {
                                                                                                  "docs": {},
                                                                                                  "p": {
                                                                                                    "docs": {},
                                                                                                    "i": {
                                                                                                      "docs": {},
                                                                                                      "e": {
                                                                                                        "docs": {},
                                                                                                        "r": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            "o": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                ")": {
                                                                                                                  "docs": {},
                                                                                                                  "&": {
                                                                                                                    "docs": {},
                                                                                                                    "g": {
                                                                                                                      "docs": {},
                                                                                                                      "t": {
                                                                                                                        "docs": {
                                                                                                                          "TrackManager.html#recommendations": {
                                                                                                                            "ref": "TrackManager.html#recommendations",
                                                                                                                            "tf": 33.33333333333333
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "c": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "y": {
                                                                      "docs": {},
                                                                      "&": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            ";": {
                                                                              "docs": {},
                                                                              "|": {
                                                                                "docs": {},
                                                                                "h": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {},
                                                                                      "p": {
                                                                                        "docs": {},
                                                                                        "e": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "r": {
                                                                                                  "docs": {},
                                                                                                  "|": {
                                                                                                    "docs": {},
                                                                                                    "a": {
                                                                                                      "docs": {},
                                                                                                      "p": {
                                                                                                        "docs": {},
                                                                                                        "i": {
                                                                                                          "docs": {},
                                                                                                          "e": {
                                                                                                            "docs": {},
                                                                                                            "r": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                "o": {
                                                                                                                  "docs": {},
                                                                                                                  "r": {
                                                                                                                    "docs": {},
                                                                                                                    ")": {
                                                                                                                      "docs": {},
                                                                                                                      "&": {
                                                                                                                        "docs": {},
                                                                                                                        "g": {
                                                                                                                          "docs": {},
                                                                                                                          "t": {
                                                                                                                            "docs": {
                                                                                                                              "CategoryManager.html#all": {
                                                                                                                                "ref": "CategoryManager.html#all",
                                                                                                                                "tf": 50
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "e": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "&": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {},
                                                                          ";": {
                                                                            "docs": {},
                                                                            "|": {
                                                                              "docs": {},
                                                                              "h": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "p": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "o": {
                                                                                              "docs": {},
                                                                                              "r": {
                                                                                                "docs": {},
                                                                                                "|": {
                                                                                                  "docs": {},
                                                                                                  "a": {
                                                                                                    "docs": {},
                                                                                                    "p": {
                                                                                                      "docs": {},
                                                                                                      "i": {
                                                                                                        "docs": {},
                                                                                                        "e": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            "r": {
                                                                                                              "docs": {},
                                                                                                              "o": {
                                                                                                                "docs": {},
                                                                                                                "r": {
                                                                                                                  "docs": {},
                                                                                                                  ")": {
                                                                                                                    "docs": {},
                                                                                                                    "&": {
                                                                                                                      "docs": {},
                                                                                                                      "g": {
                                                                                                                        "docs": {},
                                                                                                                        "t": {
                                                                                                                          "docs": {
                                                                                                                            "EpisodeManager.html#users": {
                                                                                                                              "ref": "EpisodeManager.html#users",
                                                                                                                              "tf": 33.33333333333333
                                                                                                                            },
                                                                                                                            "EpisodeManager.html#search": {
                                                                                                                              "ref": "EpisodeManager.html#search",
                                                                                                                              "tf": 25
                                                                                                                            },
                                                                                                                            "ShowManager.html#episodes": {
                                                                                                                              "ref": "ShowManager.html#episodes",
                                                                                                                              "tf": 25
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "d": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "v": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "c": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "&": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        ";": {
                                                                          "docs": {},
                                                                          "|": {
                                                                            "docs": {},
                                                                            "h": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "t": {
                                                                                  "docs": {},
                                                                                  "p": {
                                                                                    "docs": {},
                                                                                    "e": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "o": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "|": {
                                                                                                "docs": {},
                                                                                                "a": {
                                                                                                  "docs": {},
                                                                                                  "p": {
                                                                                                    "docs": {},
                                                                                                    "i": {
                                                                                                      "docs": {},
                                                                                                      "e": {
                                                                                                        "docs": {},
                                                                                                        "r": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            "o": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                ")": {
                                                                                                                  "docs": {},
                                                                                                                  "&": {
                                                                                                                    "docs": {},
                                                                                                                    "g": {
                                                                                                                      "docs": {},
                                                                                                                      "t": {
                                                                                                                        "docs": {
                                                                                                                          "PlayerManager.html#devices": {
                                                                                                                            "ref": "PlayerManager.html#devices",
                                                                                                                            "tf": 50
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "p": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "y": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "&": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            ";": {
                                                                              "docs": {},
                                                                              "|": {
                                                                                "docs": {},
                                                                                "h": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {},
                                                                                      "p": {
                                                                                        "docs": {},
                                                                                        "e": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "o": {
                                                                                                "docs": {},
                                                                                                "r": {
                                                                                                  "docs": {},
                                                                                                  "|": {
                                                                                                    "docs": {},
                                                                                                    "a": {
                                                                                                      "docs": {},
                                                                                                      "p": {
                                                                                                        "docs": {},
                                                                                                        "i": {
                                                                                                          "docs": {},
                                                                                                          "e": {
                                                                                                            "docs": {},
                                                                                                            "r": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                "o": {
                                                                                                                  "docs": {},
                                                                                                                  "r": {
                                                                                                                    "docs": {},
                                                                                                                    ")": {
                                                                                                                      "docs": {},
                                                                                                                      "&": {
                                                                                                                        "docs": {},
                                                                                                                        "g": {
                                                                                                                          "docs": {},
                                                                                                                          "t": {
                                                                                                                            "docs": {
                                                                                                                              "PlaylistManager.html#users": {
                                                                                                                                "ref": "PlaylistManager.html#users",
                                                                                                                                "tf": 25
                                                                                                                              },
                                                                                                                              "PlaylistManager.html#featured": {
                                                                                                                                "ref": "PlaylistManager.html#featured",
                                                                                                                                "tf": 33.33333333333333
                                                                                                                              },
                                                                                                                              "PlaylistManager.html#categories": {
                                                                                                                                "ref": "PlaylistManager.html#categories",
                                                                                                                                "tf": 25
                                                                                                                              },
                                                                                                                              "PlaylistManager.html#search": {
                                                                                                                                "ref": "PlaylistManager.html#search",
                                                                                                                                "tf": 25
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "s": {
                                                        "docs": {},
                                                        "h": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "w": {
                                                              "docs": {},
                                                              "&": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    ";": {
                                                                      "docs": {},
                                                                      "|": {
                                                                        "docs": {},
                                                                        "h": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              "p": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "o": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "|": {
                                                                                            "docs": {},
                                                                                            "a": {
                                                                                              "docs": {},
                                                                                              "p": {
                                                                                                "docs": {},
                                                                                                "i": {
                                                                                                  "docs": {},
                                                                                                  "e": {
                                                                                                    "docs": {},
                                                                                                    "r": {
                                                                                                      "docs": {},
                                                                                                      "r": {
                                                                                                        "docs": {},
                                                                                                        "o": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            ")": {
                                                                                                              "docs": {},
                                                                                                              "&": {
                                                                                                                "docs": {},
                                                                                                                "g": {
                                                                                                                  "docs": {},
                                                                                                                  "t": {
                                                                                                                    "docs": {
                                                                                                                      "ShowManager.html#users": {
                                                                                                                        "ref": "ShowManager.html#users",
                                                                                                                        "tf": 33.33333333333333
                                                                                                                      },
                                                                                                                      "ShowManager.html#search": {
                                                                                                                        "ref": "ShowManager.html#search",
                                                                                                                        "tf": 25
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "|": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "|": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "o": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    ")": {
                                                                                      "docs": {},
                                                                                      "&": {
                                                                                        "docs": {},
                                                                                        "g": {
                                                                                          "docs": {},
                                                                                          "t": {
                                                                                            "docs": {
                                                                                              "ArtistManager.html#get": {
                                                                                                "ref": "ArtistManager.html#get",
                                                                                                "tf": 50
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "l": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "|": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "|": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "p": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  ")": {
                                                                                    "docs": {},
                                                                                    "&": {
                                                                                      "docs": {},
                                                                                      "g": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {
                                                                                            "AlbumManager.html#get": {
                                                                                              "ref": "AlbumManager.html#get",
                                                                                              "tf": 50
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "|": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "|": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "o": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    ")": {
                                                                                      "docs": {},
                                                                                      "&": {
                                                                                        "docs": {},
                                                                                        "g": {
                                                                                          "docs": {},
                                                                                          "t": {
                                                                                            "docs": {
                                                                                              "Album.html#play": {
                                                                                                "ref": "Album.html#play",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "Album.html#save": {
                                                                                                "ref": "Album.html#save",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Album.html#remove": {
                                                                                                "ref": "Album.html#remove",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Album.html#starred": {
                                                                                                "ref": "Album.html#starred",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Artist.html#follow": {
                                                                                                "ref": "Artist.html#follow",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Artist.html#unfollow": {
                                                                                                "ref": "Artist.html#unfollow",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Episode.html#save": {
                                                                                                "ref": "Episode.html#save",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Episode.html#remove": {
                                                                                                "ref": "Episode.html#remove",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Episode.html#starred": {
                                                                                                "ref": "Episode.html#starred",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Episode.html#queue": {
                                                                                                "ref": "Episode.html#queue",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "User.html#follow": {
                                                                                                "ref": "User.html#follow",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "User.html#unfollow": {
                                                                                                "ref": "User.html#unfollow",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Playlist.html#play": {
                                                                                                "ref": "Playlist.html#play",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "Playlist.html#modify": {
                                                                                                "ref": "Playlist.html#modify",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "Playlist.html#add": {
                                                                                                "ref": "Playlist.html#add",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "Playlist.html#remove": {
                                                                                                "ref": "Playlist.html#remove",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "Playlist.html#follow": {
                                                                                                "ref": "Playlist.html#follow",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Playlist.html#unfollow": {
                                                                                                "ref": "Playlist.html#unfollow",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Show.html#play": {
                                                                                                "ref": "Show.html#play",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "Show.html#save": {
                                                                                                "ref": "Show.html#save",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Show.html#remove": {
                                                                                                "ref": "Show.html#remove",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Track.html#save": {
                                                                                                "ref": "Track.html#save",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Track.html#remove": {
                                                                                                "ref": "Track.html#remove",
                                                                                                "tf": 50
                                                                                              },
                                                                                              "Track.html#queue": {
                                                                                                "ref": "Track.html#queue",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "EpisodeManager.html#save": {
                                                                                                "ref": "EpisodeManager.html#save",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "EpisodeManager.html#remove": {
                                                                                                "ref": "EpisodeManager.html#remove",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "PlayerManager.html#transfer": {
                                                                                                "ref": "PlayerManager.html#transfer",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlayerManager.html#start": {
                                                                                                "ref": "PlayerManager.html#start",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlayerManager.html#resume": {
                                                                                                "ref": "PlayerManager.html#resume",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "PlayerManager.html#pause": {
                                                                                                "ref": "PlayerManager.html#pause",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "PlayerManager.html#next": {
                                                                                                "ref": "PlayerManager.html#next",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "PlayerManager.html#back": {
                                                                                                "ref": "PlayerManager.html#back",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "PlayerManager.html#seek": {
                                                                                                "ref": "PlayerManager.html#seek",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlayerManager.html#repeat": {
                                                                                                "ref": "PlayerManager.html#repeat",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlayerManager.html#volume": {
                                                                                                "ref": "PlayerManager.html#volume",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlayerManager.html#shuffle": {
                                                                                                "ref": "PlayerManager.html#shuffle",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlayerManager.html#queue": {
                                                                                                "ref": "PlayerManager.html#queue",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "AlbumManager.html#save": {
                                                                                                "ref": "AlbumManager.html#save",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "AlbumManager.html#remove": {
                                                                                                "ref": "AlbumManager.html#remove",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "PlaylistManager.html#modify": {
                                                                                                "ref": "PlaylistManager.html#modify",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlaylistManager.html#add": {
                                                                                                "ref": "PlaylistManager.html#add",
                                                                                                "tf": 20
                                                                                              },
                                                                                              "PlaylistManager.html#remove": {
                                                                                                "ref": "PlaylistManager.html#remove",
                                                                                                "tf": 20
                                                                                              },
                                                                                              "PlaylistManager.html#follow": {
                                                                                                "ref": "PlaylistManager.html#follow",
                                                                                                "tf": 25
                                                                                              },
                                                                                              "PlaylistManager.html#unfollow": {
                                                                                                "ref": "PlaylistManager.html#unfollow",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "ShowManager.html#save": {
                                                                                                "ref": "ShowManager.html#save",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "ShowManager.html#remove": {
                                                                                                "ref": "ShowManager.html#remove",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "TrackManager.html#save": {
                                                                                                "ref": "TrackManager.html#save",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "TrackManager.html#remove": {
                                                                                                "ref": "TrackManager.html#remove",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "ArtistManager.html#follow": {
                                                                                                "ref": "ArtistManager.html#follow",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "ArtistManager.html#unfollow": {
                                                                                                "ref": "ArtistManager.html#unfollow",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "UserManager.html#follow": {
                                                                                                "ref": "UserManager.html#follow",
                                                                                                "tf": 33.33333333333333
                                                                                              },
                                                                                              "UserManager.html#unfollow": {
                                                                                                "ref": "UserManager.html#unfollow",
                                                                                                "tf": 33.33333333333333
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "|": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "|": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "p": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  ")": {
                                                                                    "docs": {},
                                                                                    "&": {
                                                                                      "docs": {},
                                                                                      "g": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {
                                                                                            "PlayerManager.html#state": {
                                                                                              "ref": "PlayerManager.html#state",
                                                                                              "tf": 33.33333333333333
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "h": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "w": {
                                          "docs": {},
                                          "|": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "|": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "p": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                ")": {
                                                                                  "docs": {},
                                                                                  "&": {
                                                                                    "docs": {},
                                                                                    "g": {
                                                                                      "docs": {},
                                                                                      "t": {
                                                                                        "docs": {
                                                                                          "ShowManager.html#get": {
                                                                                            "ref": "ShowManager.html#get",
                                                                                            "tf": 50
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "i": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "|": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "|": {
                                                            "docs": {},
                                                            "h": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "p": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "r": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "|": {
                                                                                "docs": {},
                                                                                "a": {
                                                                                  "docs": {},
                                                                                  "p": {
                                                                                    "docs": {},
                                                                                    "i": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "r": {
                                                                                            "docs": {},
                                                                                            "o": {
                                                                                              "docs": {},
                                                                                              "r": {
                                                                                                "docs": {},
                                                                                                ")": {
                                                                                                  "docs": {},
                                                                                                  "&": {
                                                                                                    "docs": {},
                                                                                                    "g": {
                                                                                                      "docs": {},
                                                                                                      "t": {
                                                                                                        "docs": {
                                                                                                          "Playlist.html#cover": {
                                                                                                            "ref": "Playlist.html#cover",
                                                                                                            "tf": 33.33333333333333
                                                                                                          },
                                                                                                          "PlaylistManager.html#cover": {
                                                                                                            "ref": "PlaylistManager.html#cover",
                                                                                                            "tf": 25
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {},
                                                  "|": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "|": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "p": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        ")": {
                                                                                          "docs": {},
                                                                                          "&": {
                                                                                            "docs": {},
                                                                                            "g": {
                                                                                              "docs": {},
                                                                                              "t": {
                                                                                                "docs": {
                                                                                                  "CategoryManager.html#get": {
                                                                                                    "ref": "CategoryManager.html#get",
                                                                                                    "tf": 25
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "|": {
                                                  "docs": {},
                                                  "h": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "p": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "|": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "p": {
                                                                          "docs": {},
                                                                          "i": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      ")": {
                                                                                        "docs": {},
                                                                                        "&": {
                                                                                          "docs": {},
                                                                                          "g": {
                                                                                            "docs": {},
                                                                                            "t": {
                                                                                              "docs": {
                                                                                                "EpisodeManager.html#get": {
                                                                                                  "ref": "EpisodeManager.html#get",
                                                                                                  "tf": 50
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "t": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "k": {
                                            "docs": {},
                                            "|": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "|": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "p": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "o": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  ")": {
                                                                                    "docs": {},
                                                                                    "&": {
                                                                                      "docs": {},
                                                                                      "g": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {
                                                                                            "PlayerManager.html#current": {
                                                                                              "ref": "PlayerManager.html#current",
                                                                                              "tf": 33.33333333333333
                                                                                            },
                                                                                            "TrackManager.html#get": {
                                                                                              "ref": "TrackManager.html#get",
                                                                                              "tf": 50
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "p": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "|": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "|": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "p": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "r": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        ")": {
                                                                                          "docs": {},
                                                                                          "&": {
                                                                                            "docs": {},
                                                                                            "g": {
                                                                                              "docs": {},
                                                                                              "t": {
                                                                                                "docs": {
                                                                                                  "PlaylistManager.html#get": {
                                                                                                    "ref": "PlaylistManager.html#get",
                                                                                                    "tf": 33.33333333333333
                                                                                                  },
                                                                                                  "PlaylistManager.html#create": {
                                                                                                    "ref": "PlaylistManager.html#create",
                                                                                                    "tf": 25
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "b": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "|": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "y": {
                                                            "docs": {},
                                                            ".": {
                                                              "docs": {},
                                                              "&": {
                                                                "docs": {},
                                                                "l": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    ";": {
                                                                      "docs": {},
                                                                      "b": {
                                                                        "docs": {},
                                                                        "o": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "l": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "a": {
                                                                                  "docs": {},
                                                                                  "n": {
                                                                                    "docs": {},
                                                                                    "&": {
                                                                                      "docs": {},
                                                                                      "g": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {},
                                                                                          ";": {
                                                                                            "docs": {},
                                                                                            "|": {
                                                                                              "docs": {},
                                                                                              "h": {
                                                                                                "docs": {},
                                                                                                "t": {
                                                                                                  "docs": {},
                                                                                                  "t": {
                                                                                                    "docs": {},
                                                                                                    "p": {
                                                                                                      "docs": {},
                                                                                                      "e": {
                                                                                                        "docs": {},
                                                                                                        "r": {
                                                                                                          "docs": {},
                                                                                                          "r": {
                                                                                                            "docs": {},
                                                                                                            "o": {
                                                                                                              "docs": {},
                                                                                                              "r": {
                                                                                                                "docs": {},
                                                                                                                "|": {
                                                                                                                  "docs": {},
                                                                                                                  "a": {
                                                                                                                    "docs": {},
                                                                                                                    "p": {
                                                                                                                      "docs": {},
                                                                                                                      "i": {
                                                                                                                        "docs": {},
                                                                                                                        "e": {
                                                                                                                          "docs": {},
                                                                                                                          "r": {
                                                                                                                            "docs": {},
                                                                                                                            "r": {
                                                                                                                              "docs": {},
                                                                                                                              "o": {
                                                                                                                                "docs": {},
                                                                                                                                "r": {
                                                                                                                                  "docs": {},
                                                                                                                                  ")": {
                                                                                                                                    "docs": {},
                                                                                                                                    "&": {
                                                                                                                                      "docs": {},
                                                                                                                                      "g": {
                                                                                                                                        "docs": {},
                                                                                                                                        "t": {
                                                                                                                                          "docs": {
                                                                                                                                            "ShowManager.html#starred": {
                                                                                                                                              "ref": "ShowManager.html#starred",
                                                                                                                                              "tf": 33.33333333333333
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "u": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "|": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "|": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "p": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                ")": {
                                                                                  "docs": {},
                                                                                  "&": {
                                                                                    "docs": {},
                                                                                    "g": {
                                                                                      "docs": {},
                                                                                      "t": {
                                                                                        "docs": {
                                                                                          "UserManager.html#get": {
                                                                                            "ref": "UserManager.html#get",
                                                                                            "tf": 50
                                                                                          },
                                                                                          "UserManager.html#me": {
                                                                                            "ref": "UserManager.html#me",
                                                                                            "tf": 100
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          ".": {
                                            "docs": {},
                                            "&": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  ";": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {},
                                                                "&": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      ";": {
                                                                        "docs": {},
                                                                        "&": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {
                                                                                "Spotify.html#genres": {
                                                                                  "ref": "Spotify.html#genres",
                                                                                  "tf": 50
                                                                                },
                                                                                "Spotify.html#markets": {
                                                                                  "ref": "Spotify.html#markets",
                                                                                  "tf": 50
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "UserManager.html#get": {
                        "ref": "UserManager.html#get",
                        "tf": 10
                      },
                      "UserManager.html#me": {
                        "ref": "UserManager.html#me",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Spotify.html#set": {
                            "ref": "Spotify.html#set",
                            "tf": 12.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "u": {
                      "docs": {
                        "PlayerManager.html#back": {
                          "ref": "PlayerManager.html#back",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "AudioManager.html#analysis": {
                      "ref": "AudioManager.html#analysis",
                      "tf": 2.7777777777777777
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "y": {
                "docs": {
                  "Album.html#play": {
                    "ref": "Album.html#play",
                    "tf": 700
                  },
                  "Playlist.html#play": {
                    "ref": "Playlist.html#play",
                    "tf": 700
                  },
                  "Show.html#play": {
                    "ref": "Show.html#play",
                    "tf": 700
                  },
                  "PlayerManager.html": {
                    "ref": "PlayerManager.html",
                    "tf": 16.666666666666664
                  },
                  "PlayerManager.html#transfer": {
                    "ref": "PlayerManager.html#transfer",
                    "tf": 32.14285714285714
                  },
                  "PlayerManager.html#current": {
                    "ref": "PlayerManager.html#current",
                    "tf": 7.142857142857142
                  },
                  "PlayerManager.html#seek": {
                    "ref": "PlayerManager.html#seek",
                    "tf": 7.142857142857142
                  },
                  "PlayerManager.html#recent": {
                    "ref": "PlayerManager.html#recent",
                    "tf": 4.166666666666666
                  },
                  "PlaylistManager.html": {
                    "ref": "PlaylistManager.html",
                    "tf": 16.666666666666664
                  },
                  "ShowManager.html": {
                    "ref": "ShowManager.html",
                    "tf": 16.666666666666664
                  }
                },
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Playlist.html": {
                            "ref": "Playlist.html",
                            "tf": 1925
                          },
                          "Playlist.html#play": {
                            "ref": "Playlist.html#play",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#modify": {
                            "ref": "Playlist.html#modify",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#add": {
                            "ref": "Playlist.html#add",
                            "tf": 12.5
                          },
                          "Playlist.html#remove": {
                            "ref": "Playlist.html#remove",
                            "tf": 12.5
                          },
                          "Playlist.html#follow": {
                            "ref": "Playlist.html#follow",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#unfollow": {
                            "ref": "Playlist.html#unfollow",
                            "tf": 16.666666666666664
                          },
                          "Playlist.html#following": {
                            "ref": "Playlist.html#following",
                            "tf": 10
                          },
                          "Playlist.html#cover": {
                            "ref": "Playlist.html#cover",
                            "tf": 10
                          },
                          "PlaylistManager.html#get": {
                            "ref": "PlaylistManager.html#get",
                            "tf": 12.5
                          },
                          "PlaylistManager.html#modify": {
                            "ref": "PlaylistManager.html#modify",
                            "tf": 6.25
                          },
                          "PlaylistManager.html#update": {
                            "ref": "PlaylistManager.html#update",
                            "tf": 7.142857142857142
                          },
                          "PlaylistManager.html#tracks": {
                            "ref": "PlaylistManager.html#tracks",
                            "tf": 7.142857142857142
                          },
                          "PlaylistManager.html#add": {
                            "ref": "PlaylistManager.html#add",
                            "tf": 8.333333333333332
                          },
                          "PlaylistManager.html#remove": {
                            "ref": "PlaylistManager.html#remove",
                            "tf": 8.333333333333332
                          },
                          "PlaylistManager.html#users": {
                            "ref": "PlaylistManager.html#users",
                            "tf": 7.142857142857142
                          },
                          "PlaylistManager.html#follow": {
                            "ref": "PlaylistManager.html#follow",
                            "tf": 10
                          },
                          "PlaylistManager.html#unfollow": {
                            "ref": "PlaylistManager.html#unfollow",
                            "tf": 10
                          },
                          "PlaylistManager.html#followers": {
                            "ref": "PlaylistManager.html#followers",
                            "tf": 5.555555555555555
                          },
                          "PlaylistManager.html#create": {
                            "ref": "PlaylistManager.html#create",
                            "tf": 12.5
                          },
                          "PlaylistManager.html#featured": {
                            "ref": "PlaylistManager.html#featured",
                            "tf": 12.5
                          },
                          "PlaylistManager.html#categories": {
                            "ref": "PlaylistManager.html#categories",
                            "tf": 8.333333333333332
                          },
                          "PlaylistManager.html#cover": {
                            "ref": "PlaylistManager.html#cover",
                            "tf": 10
                          },
                          "PlaylistManager.html#search": {
                            "ref": "PlaylistManager.html#search",
                            "tf": 12.5
                          },
                          "Spotify.html#playlists": {
                            "ref": "Spotify.html#playlists",
                            "tf": 725
                          }
                        },
                        "#": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "i": {
                                        "docs": {
                                          "Playlist.html#spotify": {
                                            "ref": "Playlist.html#spotify",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "p": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "y": {
                                  "docs": {
                                    "Playlist.html#play": {
                                      "ref": "Playlist.html#play",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "m": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "i": {
                                      "docs": {
                                        "Playlist.html#modify": {
                                          "ref": "Playlist.html#modify",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "a": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Playlist.html#add": {
                                    "ref": "Playlist.html#add",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          },
                          "r": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "v": {
                                    "docs": {
                                      "Playlist.html#remove": {
                                        "ref": "Playlist.html#remove",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "f": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {
                                        "Playlist.html#follow": {
                                          "ref": "Playlist.html#follow",
                                          "tf": 1150
                                        },
                                        "Playlist.html#following": {
                                          "ref": "Playlist.html#following",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "u": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "w": {
                                          "docs": {
                                            "Playlist.html#unfollow": {
                                              "ref": "Playlist.html#unfollow",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "c": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "v": {
                                "docs": {
                                  "Playlist.html#cover": {
                                    "ref": "Playlist.html#cover",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "PlaylistManager.html": {
                                      "ref": "PlaylistManager.html",
                                      "tf": 1900
                                    },
                                    "Spotify.html#playlists": {
                                      "ref": "Spotify.html#playlists",
                                      "tf": 50
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "#": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {
                                                        "PlaylistManager.html#spotify": {
                                                          "ref": "PlaylistManager.html#spotify",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "h": {
                                                    "docs": {
                                                      "PlaylistManager.html#search": {
                                                        "ref": "PlaylistManager.html#search",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "PlaylistManager.html#get": {
                                                  "ref": "PlaylistManager.html#get",
                                                  "tf": 1300
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "m": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "PlaylistManager.html#modify": {
                                                        "ref": "PlaylistManager.html#modify",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "u": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "PlaylistManager.html#update": {
                                                  "ref": "PlaylistManager.html#update",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          },
                                          "s": {
                                            "docs": {
                                              "PlaylistManager.html#users": {
                                                "ref": "PlaylistManager.html#users",
                                                "tf": 1150
                                              }
                                            }
                                          },
                                          "n": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "w": {
                                                        "docs": {
                                                          "PlaylistManager.html#unfollow": {
                                                            "ref": "PlaylistManager.html#unfollow",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "t": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "k": {
                                                  "docs": {
                                                    "PlaylistManager.html#tracks": {
                                                      "ref": "PlaylistManager.html#tracks",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "PlaylistManager.html#add": {
                                                  "ref": "PlaylistManager.html#add",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "r": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "v": {
                                                  "docs": {
                                                    "PlaylistManager.html#remove": {
                                                      "ref": "PlaylistManager.html#remove",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "f": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "w": {
                                                    "docs": {
                                                      "PlaylistManager.html#follow": {
                                                        "ref": "PlaylistManager.html#follow",
                                                        "tf": 1150
                                                      },
                                                      "PlaylistManager.html#followers": {
                                                        "ref": "PlaylistManager.html#followers",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {
                                                      "PlaylistManager.html#featured": {
                                                        "ref": "PlaylistManager.html#featured",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "c": {
                                          "docs": {},
                                          "r": {
                                            "docs": {
                                              "PlaylistManager.html#create": {
                                                "ref": "PlaylistManager.html#create",
                                                "tf": 1150
                                              }
                                            }
                                          },
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {
                                                          "PlaylistManager.html#categories": {
                                                            "ref": "PlaylistManager.html#categories",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "o": {
                                            "docs": {},
                                            "v": {
                                              "docs": {
                                                "PlaylistManager.html#cover": {
                                                  "ref": "PlaylistManager.html#cover",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "'": {
                          "docs": {
                            "PlaylistManager.html#modify": {
                              "ref": "PlaylistManager.html#modify",
                              "tf": 6.25
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Spotify.html#player": {
                        "ref": "Spotify.html#player",
                        "tf": 725
                      }
                    },
                    "m": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "PlayerManager.html": {
                                  "ref": "PlayerManager.html",
                                  "tf": 1900
                                },
                                "Spotify.html#player": {
                                  "ref": "Spotify.html#player",
                                  "tf": 50
                                }
                              },
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "#": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "f": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {
                                                    "PlayerManager.html#spotify": {
                                                      "ref": "PlayerManager.html#spotify",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "t": {
                                        "docs": {
                                          "PlayerManager.html#state": {
                                            "ref": "PlayerManager.html#state",
                                            "tf": 1150
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "PlayerManager.html#start": {
                                                  "ref": "PlayerManager.html#start",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "k": {
                                            "docs": {
                                              "PlayerManager.html#seek": {
                                                "ref": "PlayerManager.html#seek",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "h": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "f": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "l": {
                                                "docs": {
                                                  "PlayerManager.html#shuffle": {
                                                    "ref": "PlayerManager.html#shuffle",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "f": {
                                                "docs": {
                                                  "PlayerManager.html#transfer": {
                                                    "ref": "PlayerManager.html#transfer",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "v": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "c": {
                                              "docs": {
                                                "PlayerManager.html#devices": {
                                                  "ref": "PlayerManager.html#devices",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "c": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "r": {
                                            "docs": {
                                              "PlayerManager.html#current": {
                                                "ref": "PlayerManager.html#current",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "m": {
                                              "docs": {
                                                "PlayerManager.html#resume": {
                                                  "ref": "PlayerManager.html#resume",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "p": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "PlayerManager.html#repeat": {
                                                    "ref": "PlayerManager.html#repeat",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "c": {
                                          "docs": {
                                            "PlayerManager.html#recent": {
                                              "ref": "PlayerManager.html#recent",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "p": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "s": {
                                            "docs": {
                                              "PlayerManager.html#pause": {
                                                "ref": "PlayerManager.html#pause",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "n": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "x": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "PlayerManager.html#next": {
                                                "ref": "PlayerManager.html#next",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "b": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "k": {
                                            "docs": {
                                              "PlayerManager.html#back": {
                                                "ref": "PlayerManager.html#back",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "v": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "m": {
                                              "docs": {
                                                "PlayerManager.html#volume": {
                                                  "ref": "PlayerManager.html#volume",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "q": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "u": {
                                            "docs": {
                                              "PlayerManager.html#queue": {
                                                "ref": "PlayerManager.html#queue",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "k": {
                        "docs": {
                          "PlayerManager.html#state": {
                            "ref": "PlayerManager.html#state",
                            "tf": 10
                          },
                          "PlayerManager.html#transfer": {
                            "ref": "PlayerManager.html#transfer",
                            "tf": 7.142857142857142
                          },
                          "PlayerManager.html#resume": {
                            "ref": "PlayerManager.html#resume",
                            "tf": 8.333333333333332
                          },
                          "PlayerManager.html#pause": {
                            "ref": "PlayerManager.html#pause",
                            "tf": 12.5
                          },
                          "PlayerManager.html#repeat": {
                            "ref": "PlayerManager.html#repeat",
                            "tf": 5
                          },
                          "PlayerManager.html#volume": {
                            "ref": "PlayerManager.html#volume",
                            "tf": 8.333333333333332
                          },
                          "PlayerManager.html#shuffle": {
                            "ref": "PlayerManager.html#shuffle",
                            "tf": 12.5
                          },
                          "PlayerManager.html#queue": {
                            "ref": "PlayerManager.html#queue",
                            "tf": 7.142857142857142
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "Playlist.html#add": {
                      "ref": "Playlist.html#add",
                      "tf": 25
                    },
                    "PlayerManager.html#seek": {
                      "ref": "PlayerManager.html#seek",
                      "tf": 7.142857142857142
                    },
                    "PlaylistManager.html#add": {
                      "ref": "PlaylistManager.html#add",
                      "tf": 20
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "c": {
                "docs": {},
                "a": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "PlayerManager.html#recent": {
                          "ref": "PlayerManager.html#recent",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "UserManager.html#get": {
                        "ref": "UserManager.html#get",
                        "tf": 10
                      }
                    },
                    "/": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "v": {
                              "docs": {
                                "PlaylistManager.html#modify": {
                                  "ref": "PlaylistManager.html#modify",
                                  "tf": 6.25
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "e": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {
                    "Episode.html#queue": {
                      "ref": "Episode.html#queue",
                      "tf": 700
                    },
                    "Track.html#queue": {
                      "ref": "Track.html#queue",
                      "tf": 700
                    },
                    "PlayerManager.html#next": {
                      "ref": "PlayerManager.html#next",
                      "tf": 10
                    },
                    "PlayerManager.html#back": {
                      "ref": "PlayerManager.html#back",
                      "tf": 10
                    },
                    "PlayerManager.html#queue": {
                      "ref": "PlayerManager.html#queue",
                      "tf": 682.1428571428571
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "i": {
                  "docs": {
                    "EpisodeManager.html#search": {
                      "ref": "EpisodeManager.html#search",
                      "tf": 25
                    },
                    "AlbumManager.html#search": {
                      "ref": "AlbumManager.html#search",
                      "tf": 25
                    },
                    "PlaylistManager.html#search": {
                      "ref": "PlaylistManager.html#search",
                      "tf": 25
                    },
                    "ShowManager.html#search": {
                      "ref": "ShowManager.html#search",
                      "tf": 25
                    },
                    "TrackManager.html#search": {
                      "ref": "TrackManager.html#search",
                      "tf": 25
                    },
                    "ArtistManager.html#search": {
                      "ref": "ArtistManager.html#search",
                      "tf": 25
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "o": {
            "docs": {},
            "l": {
              "docs": {
                "PlayerManager.html#volume": {
                  "ref": "PlayerManager.html#volume",
                  "tf": 25
                }
              },
              "u": {
                "docs": {},
                "m": {
                  "docs": {
                    "PlayerManager.html#volume": {
                      "ref": "PlayerManager.html#volume",
                      "tf": 683.3333333333334
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "d": {
                "docs": {
                  "Spotify.html#set": {
                    "ref": "Spotify.html#set",
                    "tf": 25
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "u": {
                "docs": {
                  "Spotify.html#set": {
                    "ref": "Spotify.html#set",
                    "tf": 25
                  }
                }
              }
            }
          }
        },
        "k": {
          "docs": {},
          "e": {
            "docs": {},
            "y": {
              "docs": {
                "Spotify.html#set": {
                  "ref": "Spotify.html#set",
                  "tf": 25
                }
              }
            }
          }
        }
      },
      "length": 1436
    },
    "corpusTokens": [
      "access",
      "access_token",
      "account",
      "activ",
      "add",
      "affin",
      "against",
      "album",
      "album#play",
      "album#remov",
      "album#sav",
      "album#spotifi",
      "album#star",
      "albummanag",
      "albummanager#get",
      "albummanager#releas",
      "albummanager#remov",
      "albummanager#sav",
      "albummanager#search",
      "albummanager#spotifi",
      "albummanager#star",
      "albummanager#track",
      "album’",
      "alreadi",
      "analysi",
      "api",
      "apierror",
      "apierror#error",
      "array.&lt;artist&gt;|httperror|apierror",
      "array.&lt;boolean&gt;|httperror|apierror",
      "art",
      "artist",
      "artist#album",
      "artist#follow",
      "artist#rel",
      "artist#spotifi",
      "artist#top",
      "artist#unfollow",
      "artist'",
      "artistmanag",
      "artistmanager#follow",
      "artistmanager#get",
      "artistmanager#rel",
      "artistmanager#search",
      "artistmanager#spotifi",
      "artistmanager#top",
      "artistmanager#unfollow",
      "assign",
      "associ",
      "audio",
      "audio#analysi",
      "audio#featur",
      "audio#spotifi",
      "audiomanag",
      "audiomanager#analysi",
      "audiomanager#featur",
      "audiomanager#spotifi",
      "avail",
      "back",
      "base",
      "be",
      "bodi",
      "calcul",
      "catalog",
      "categori",
      "categorymanag",
      "categorymanager#al",
      "categorymanager#get",
      "categorymanager#spotifi",
      "chang",
      "check",
      "class",
      "client",
      "client'",
      "content",
      "context",
      "countri",
      "cours",
      "cover",
      "creat",
      "current",
      "data",
      "delet",
      "depend",
      "describ",
      "detail",
      "determin",
      "devic",
      "document",
      "doesn't",
      "end",
      "entiti",
      "episod",
      "episode#queu",
      "episode#remov",
      "episode#sav",
      "episode#spotifi",
      "episode#star",
      "episodemanag",
      "episodemanager#get",
      "episodemanager#remov",
      "episodemanager#sav",
      "episodemanager#search",
      "episodemanager#spotifi",
      "episodemanager#star",
      "episodemanager#us",
      "error",
      "featur",
      "fetch",
      "fetch#respons",
      "fetch#response&gt",
      "follow",
      "full",
      "function",
      "gener",
      "genr",
      "given",
      "global",
      "http",
      "httperror",
      "httperror#respons",
      "id",
      "identifi",
      "imag",
      "includ",
      "index",
      "inform",
      "interact",
      "item",
      "json",
      "key",
      "level",
      "librari",
      "library.j",
      "list",
      "list:class",
      "local",
      "low",
      "manag",
      "market",
      "match",
      "member",
      "method",
      "mode",
      "modifi",
      "modul",
      "more",
      "ms",
      "music",
      "name",
      "new",
      "next",
      "node",
      "note",
      "number",
      "oauth2",
      "object",
      "object|nul",
      "on",
      "option",
      "own",
      "paramet",
      "particular",
      "path",
      "paus",
      "pitch",
      "play",
      "playback",
      "player",
      "playermanag",
      "playermanager#back",
      "playermanager#curr",
      "playermanager#devic",
      "playermanager#next",
      "playermanager#paus",
      "playermanager#queu",
      "playermanager#rec",
      "playermanager#repeat",
      "playermanager#resum",
      "playermanager#seek",
      "playermanager#shuffl",
      "playermanager#spotifi",
      "playermanager#st",
      "playermanager#start",
      "playermanager#transf",
      "playermanager#volum",
      "playlist",
      "playlist#add",
      "playlist#cov",
      "playlist#follow",
      "playlist#modifi",
      "playlist#play",
      "playlist#remov",
      "playlist#spotifi",
      "playlist#unfollow",
      "playlist'",
      "playlistmanag",
      "playlistmanager#add",
      "playlistmanager#categori",
      "playlistmanager#cov",
      "playlistmanager#cr",
      "playlistmanager#featur",
      "playlistmanager#follow",
      "playlistmanager#get",
      "playlistmanager#modifi",
      "playlistmanager#remov",
      "playlistmanager#search",
      "playlistmanager#spotifi",
      "playlistmanager#track",
      "playlistmanager#unfollow",
      "playlistmanager#upd",
      "playlistmanager#us",
      "podcast",
      "posit",
      "previou",
      "profil",
      "promise.&lt;(album|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;album&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;artist&gt;|array.&lt;track&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;artist&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;boolean&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;category&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;device&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;episode&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;playlist&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;show&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;track&gt;|httperror|apierror)&gt",
      "promise.&lt;(array.&lt;tracks&gt;|httperror|apierror)&gt",
      "promise.&lt;(artist|httperror|apierror)&gt",
      "promise.&lt;(audio|httperror|apierror)&gt",
      "promise.&lt;(boolean|array.&lt;boolean&gt;|httperror|apierror)&gt",
      "promise.&lt;(category|httperror|apierror)&gt",
      "promise.&lt;(episode|httperror|apierror)&gt",
      "promise.&lt;(image|status|httperror|apierror)&gt",
      "promise.&lt;(playlist|httperror|apierror)&gt",
      "promise.&lt;(show|httperror|apierror)&gt",
      "promise.&lt;(state|httperror|apierror)&gt",
      "promise.&lt;(status|httperror|apierror)&gt",
      "promise.&lt;(track|httperror|apierror)&gt",
      "promise.&lt;(user|httperror|apierror)&gt",
      "promise.&lt;array.&lt;string&gt;&gt",
      "promise.&lt;nod",
      "properti",
      "public",
      "public/priv",
      "queri",
      "queue",
      "readm",
      "recent",
      "recommend",
      "refresh",
      "refresher|nul",
      "relat",
      "releas",
      "remov",
      "reorder",
      "repeat",
      "replac",
      "repres",
      "request'",
      "respons",
      "resum",
      "retriev",
      "rhythm",
      "save",
      "search",
      "see",
      "seed",
      "seek",
      "set",
      "shortcut",
      "show",
      "show#play",
      "show#remov",
      "show#sav",
      "show#spotifi",
      "show#star",
      "showmanag",
      "showmanager#episod",
      "showmanager#get",
      "showmanager#remov",
      "showmanager#sav",
      "showmanager#search",
      "showmanager#spotifi",
      "showmanager#star",
      "showmanager#us",
      "show’",
      "shuffl",
      "similar",
      "singl",
      "skip",
      "snapshot",
      "song",
      "specif",
      "specifi",
      "spotifi",
      "spotify#access_token",
      "spotify#album",
      "spotify#artist",
      "spotify#categori",
      "spotify#episod",
      "spotify#genr",
      "spotify#market",
      "spotify#play",
      "spotify#playlist",
      "spotify#refresh",
      "spotify#set",
      "spotify#show",
      "spotify#track",
      "spotify#us",
      "spotify#util",
      "spotify'",
      "star",
      "start",
      "state",
      "statu",
      "status|httperror|apierror",
      "string",
      "structur",
      "support",
      "tag",
      "timbr",
      "toggl",
      "tojson",
      "token",
      "top",
      "track",
      "track#audio",
      "track#queu",
      "track#remov",
      "track#sav",
      "track#spotifi",
      "track#star",
      "track'",
      "trackmanag",
      "trackmanager#audio",
      "trackmanager#get",
      "trackmanager#recommend",
      "trackmanager#remov",
      "trackmanager#sav",
      "trackmanager#search",
      "trackmanager#spotifi",
      "trackmanager#star",
      "track’",
      "transfer",
      "type",
      "unfollow",
      "uniqu",
      "updat",
      "upload",
      "uri",
      "us",
      "user",
      "user#follow",
      "user#spotifi",
      "user#unfollow",
      "user'",
      "usermanag",
      "usermanager#follow",
      "usermanager#get",
      "usermanager#m",
      "usermanager#spotifi",
      "usermanager#top",
      "usermanager#unfollow",
      "usernam",
      "user’",
      "util",
      "util#fetch",
      "util#spotifi",
      "util#tojson",
      "valu",
      "void",
      "vol",
      "volum"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Spotify Library.js",
      "longname": "index",
      "name": "Spotify Library.js",
      "tags": "index",
      "summary": "A library for interacting with spotify's API.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "Base.html": {
      "id": "Base.html",
      "kind": "class",
      "title": "Base",
      "longname": "Base",
      "name": "Base",
      "tags": "Base",
      "summary": "",
      "description": "Base for structures - assigns item data to the class.",
      "body": ""
    },
    "HTTPError.html": {
      "id": "HTTPError.html",
      "kind": "class",
      "title": "HTTPError",
      "longname": "HTTPError",
      "name": "HTTPError",
      "tags": "HTTPError",
      "summary": "",
      "description": "HTTP Error.",
      "body": ""
    },
    "HTTPError.html#response": {
      "id": "HTTPError.html#response",
      "kind": "member",
      "title": "response :node-fetch#Response",
      "longname": "HTTPError#response",
      "name": "response",
      "tags": "HTTPError#response response",
      "summary": "",
      "description": "The fetch Response."
    },
    "ApiError.html": {
      "id": "ApiError.html",
      "kind": "class",
      "title": "ApiError",
      "longname": "ApiError",
      "name": "ApiError",
      "tags": "ApiError",
      "summary": "",
      "description": "API Error.",
      "body": ""
    },
    "ApiError.html#error": {
      "id": "ApiError.html#error",
      "kind": "member",
      "title": "error :number",
      "longname": "ApiError#error",
      "name": "error",
      "tags": "ApiError#error error",
      "summary": "",
      "description": "The fetch response status."
    },
    "Util.html": {
      "id": "Util.html",
      "kind": "class",
      "title": "Util",
      "longname": "Util",
      "name": "Util",
      "tags": "Util",
      "summary": "",
      "description": "The spotify client's util.",
      "body": ""
    },
    "Util.html#spotify": {
      "id": "Util.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Util#spotify",
      "name": "spotify",
      "tags": "Util#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Util.html#toJson": {
      "id": "Util.html#toJson",
      "kind": "function",
      "title": "toJson( response ) → {object|null}",
      "longname": "Util#toJson",
      "name": "toJson",
      "tags": "Util#toJson toJson",
      "summary": "",
      "description": "Checks to see if the Response if json."
    },
    "Util.html#fetch": {
      "id": "Util.html#fetch",
      "kind": "function",
      "title": "fetch( path, method, body, options ) → {Promise.&lt;node-fetch#Response&gt;}",
      "longname": "Util#fetch",
      "name": "fetch",
      "tags": "Util#fetch fetch",
      "summary": "",
      "description": "Fetchs from spotify's api."
    },
    "AudioManager.html": {
      "id": "AudioManager.html",
      "kind": "class",
      "title": "AudioManager",
      "longname": "AudioManager",
      "name": "AudioManager",
      "tags": "AudioManager",
      "summary": "",
      "description": "Manages spotify tracks.",
      "body": ""
    },
    "AudioManager.html#spotify": {
      "id": "AudioManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "AudioManager#spotify",
      "name": "spotify",
      "tags": "AudioManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "AudioManager.html#features": {
      "id": "AudioManager.html#features",
      "kind": "function",
      "title": "features( id ) → {Promise.&lt;(Audio|HTTPError|ApiError)&gt;}",
      "longname": "AudioManager#features",
      "name": "features",
      "tags": "AudioManager#features features",
      "summary": "",
      "description": "Get audio feature information for a single track identified by its unique Spotify ID."
    },
    "AudioManager.html#analysis": {
      "id": "AudioManager.html#analysis",
      "kind": "function",
      "title": "analysis( id ) → {Promise.&lt;(Audio|HTTPError|ApiError)&gt;}",
      "longname": "AudioManager#analysis",
      "name": "analysis",
      "tags": "AudioManager#analysis analysis",
      "summary": "",
      "description": "Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre."
    },
    "Album.html": {
      "id": "Album.html",
      "kind": "class",
      "title": "Album",
      "longname": "Album",
      "name": "Album",
      "tags": "Album",
      "summary": "",
      "description": "Represents the an album.",
      "body": ""
    },
    "Album.html#spotify": {
      "id": "Album.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Album#spotify",
      "name": "spotify",
      "tags": "Album#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Album.html#play": {
      "id": "Album.html#play",
      "kind": "function",
      "title": "play( options ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Album#play",
      "name": "play",
      "tags": "Album#play play",
      "summary": "",
      "description": "Shortcut to play the album."
    },
    "Album.html#save": {
      "id": "Album.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Album#save",
      "name": "save",
      "tags": "Album#save save",
      "summary": "",
      "description": "Shortcut to save the album."
    },
    "Album.html#remove": {
      "id": "Album.html#remove",
      "kind": "function",
      "title": "remove() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Album#remove",
      "name": "remove",
      "tags": "Album#remove remove",
      "summary": "",
      "description": "Shortcut to remove the album."
    },
    "Album.html#starred": {
      "id": "Album.html#starred",
      "kind": "function",
      "title": "starred() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Album#starred",
      "name": "starred",
      "tags": "Album#starred starred",
      "summary": "",
      "description": "Shortcut to check if a albums saved in the current Spotify user's library."
    },
    "Artist.html": {
      "id": "Artist.html",
      "kind": "class",
      "title": "Artist",
      "longname": "Artist",
      "name": "Artist",
      "tags": "Artist",
      "summary": "",
      "description": "Represents the an artist.",
      "body": ""
    },
    "Artist.html#spotify": {
      "id": "Artist.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Artist#spotify",
      "name": "spotify",
      "tags": "Artist#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Artist.html#albums": {
      "id": "Artist.html#albums",
      "kind": "function",
      "title": "albums( options ) → {Promise.&lt;(Array.&lt;Album&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Artist#albums",
      "name": "albums",
      "tags": "Artist#albums albums",
      "summary": "",
      "description": "Shortcut to get the albums of an artist."
    },
    "Artist.html#follow": {
      "id": "Artist.html#follow",
      "kind": "function",
      "title": "follow() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Artist#follow",
      "name": "follow",
      "tags": "Artist#follow follow",
      "summary": "",
      "description": "Shortcut to follow the artist."
    },
    "Artist.html#unfollow": {
      "id": "Artist.html#unfollow",
      "kind": "function",
      "title": "unfollow() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Artist#unfollow",
      "name": "unfollow",
      "tags": "Artist#unfollow unfollow",
      "summary": "",
      "description": "Shortcut to unfollow the artist."
    },
    "Artist.html#following": {
      "id": "Artist.html#following",
      "kind": "function",
      "title": "following() → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Artist#following",
      "name": "following",
      "tags": "Artist#following following",
      "summary": "",
      "description": "Shortcut to check if the current user is following the artist."
    },
    "Artist.html#top": {
      "id": "Artist.html#top",
      "kind": "function",
      "title": "top( country ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Artist#top",
      "name": "top",
      "tags": "Artist#top top",
      "summary": "",
      "description": "Shortcut to get the top tracks of an artist."
    },
    "Artist.html#related": {
      "id": "Artist.html#related",
      "kind": "function",
      "title": "related() → {Promise.&lt;(Array.&lt;Artist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Artist#related",
      "name": "related",
      "tags": "Artist#related related",
      "summary": "",
      "description": "Shortcut to get related artists."
    },
    "Audio.html": {
      "id": "Audio.html",
      "kind": "class",
      "title": "Audio",
      "longname": "Audio",
      "name": "Audio",
      "tags": "Audio",
      "summary": "",
      "description": "Represents the a track's audio.",
      "body": ""
    },
    "Audio.html#spotify": {
      "id": "Audio.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Audio#spotify",
      "name": "spotify",
      "tags": "Audio#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Audio.html#features": {
      "id": "Audio.html#features",
      "kind": "function",
      "title": "features() → {Promise.&lt;(Audio|HTTPError|ApiError)&gt;}",
      "longname": "Audio#features",
      "name": "features",
      "tags": "Audio#features features",
      "summary": "",
      "description": "Shortcut to the track's audio features."
    },
    "Audio.html#analysis": {
      "id": "Audio.html#analysis",
      "kind": "function",
      "title": "analysis() → {Promise.&lt;(Audio|HTTPError|ApiError)&gt;}",
      "longname": "Audio#analysis",
      "name": "analysis",
      "tags": "Audio#analysis analysis",
      "summary": "",
      "description": "Shortcut to the track's audio analysis."
    },
    "Episode.html": {
      "id": "Episode.html",
      "kind": "class",
      "title": "Episode",
      "longname": "Episode",
      "name": "Episode",
      "tags": "Episode",
      "summary": "",
      "description": "Represents the episode.",
      "body": ""
    },
    "Episode.html#spotify": {
      "id": "Episode.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Episode#spotify",
      "name": "spotify",
      "tags": "Episode#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Episode.html#save": {
      "id": "Episode.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Episode#save",
      "name": "save",
      "tags": "Episode#save save",
      "summary": "",
      "description": "Shortcut to save the episode."
    },
    "Episode.html#remove": {
      "id": "Episode.html#remove",
      "kind": "function",
      "title": "remove() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Episode#remove",
      "name": "remove",
      "tags": "Episode#remove remove",
      "summary": "",
      "description": "Shortcut to remove the episode."
    },
    "Episode.html#starred": {
      "id": "Episode.html#starred",
      "kind": "function",
      "title": "starred() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Episode#starred",
      "name": "starred",
      "tags": "Episode#starred starred",
      "summary": "",
      "description": "Shortcut to check if a episodes saved in the current Spotify user's library."
    },
    "Episode.html#queue": {
      "id": "Episode.html#queue",
      "kind": "function",
      "title": "queue( device ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Episode#queue",
      "name": "queue",
      "tags": "Episode#queue queue",
      "summary": "",
      "description": "Shortcut to queue an episode."
    },
    "User.html": {
      "id": "User.html",
      "kind": "class",
      "title": "User",
      "longname": "User",
      "name": "User",
      "tags": "User",
      "summary": "",
      "description": "Represents a user.",
      "body": ""
    },
    "User.html#spotify": {
      "id": "User.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "User#spotify",
      "name": "spotify",
      "tags": "User#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "User.html#follow": {
      "id": "User.html#follow",
      "kind": "function",
      "title": "follow() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "User#follow",
      "name": "follow",
      "tags": "User#follow follow",
      "summary": "",
      "description": "Shortcut to follow the user."
    },
    "User.html#unfollow": {
      "id": "User.html#unfollow",
      "kind": "function",
      "title": "unfollow() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "User#unfollow",
      "name": "unfollow",
      "tags": "User#unfollow unfollow",
      "summary": "",
      "description": "Shortcut to unfollow the user."
    },
    "User.html#following": {
      "id": "User.html#following",
      "kind": "function",
      "title": "following() → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "User#following",
      "name": "following",
      "tags": "User#following following",
      "summary": "",
      "description": "Shortcut to check if the current user is following the user."
    },
    "Playlist.html": {
      "id": "Playlist.html",
      "kind": "class",
      "title": "Playlist",
      "longname": "Playlist",
      "name": "Playlist",
      "tags": "Playlist",
      "summary": "",
      "description": "Represents the playlist.",
      "body": ""
    },
    "Playlist.html#spotify": {
      "id": "Playlist.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Playlist#spotify",
      "name": "spotify",
      "tags": "Playlist#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Playlist.html#play": {
      "id": "Playlist.html#play",
      "kind": "function",
      "title": "play( options ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#play",
      "name": "play",
      "tags": "Playlist#play play",
      "summary": "",
      "description": "Shortcut to play the playlist."
    },
    "Playlist.html#modify": {
      "id": "Playlist.html#modify",
      "kind": "function",
      "title": "modify( options ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#modify",
      "name": "modify",
      "tags": "Playlist#modify modify",
      "summary": "",
      "description": "Shortcut to modify the playlist."
    },
    "Playlist.html#add": {
      "id": "Playlist.html#add",
      "kind": "function",
      "title": "add( uris [, position ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#add",
      "name": "add",
      "tags": "Playlist#add add",
      "summary": "",
      "description": "Shortcut to add tracks to a playlist."
    },
    "Playlist.html#remove": {
      "id": "Playlist.html#remove",
      "kind": "function",
      "title": "remove( uris [, snapshot ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#remove",
      "name": "remove",
      "tags": "Playlist#remove remove",
      "summary": "",
      "description": "Shortcut to remove a track from a playlist."
    },
    "Playlist.html#follow": {
      "id": "Playlist.html#follow",
      "kind": "function",
      "title": "follow() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#follow",
      "name": "follow",
      "tags": "Playlist#follow follow",
      "summary": "",
      "description": "Shortcut to follow the playlist."
    },
    "Playlist.html#unfollow": {
      "id": "Playlist.html#unfollow",
      "kind": "function",
      "title": "unfollow() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#unfollow",
      "name": "unfollow",
      "tags": "Playlist#unfollow unfollow",
      "summary": "",
      "description": "Shortcut to unfollow the playlist."
    },
    "Playlist.html#following": {
      "id": "Playlist.html#following",
      "kind": "function",
      "title": "following( users ) → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#following",
      "name": "following",
      "tags": "Playlist#following following",
      "summary": "",
      "description": "Shortcut to check user's following the playlist."
    },
    "Playlist.html#cover": {
      "id": "Playlist.html#cover",
      "kind": "function",
      "title": "cover( [ image ] ) → {Promise.&lt;(Image|Status|HTTPError|ApiError)&gt;}",
      "longname": "Playlist#cover",
      "name": "cover",
      "tags": "Playlist#cover cover",
      "summary": "",
      "description": "Shortcut to upload cover art to a playlist."
    },
    "Show.html": {
      "id": "Show.html",
      "kind": "class",
      "title": "Show",
      "longname": "Show",
      "name": "Show",
      "tags": "Show",
      "summary": "",
      "description": "Represents the show.",
      "body": ""
    },
    "Show.html#spotify": {
      "id": "Show.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Show#spotify",
      "name": "spotify",
      "tags": "Show#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Show.html#play": {
      "id": "Show.html#play",
      "kind": "function",
      "title": "play( options ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Show#play",
      "name": "play",
      "tags": "Show#play play",
      "summary": "",
      "description": "Shortcut to play the show."
    },
    "Show.html#save": {
      "id": "Show.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Show#save",
      "name": "save",
      "tags": "Show#save save",
      "summary": "",
      "description": "Shortcut to save the show."
    },
    "Show.html#remove": {
      "id": "Show.html#remove",
      "kind": "function",
      "title": "remove() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Show#remove",
      "name": "remove",
      "tags": "Show#remove remove",
      "summary": "",
      "description": "Shortcut to remove the show."
    },
    "Show.html#starred": {
      "id": "Show.html#starred",
      "kind": "function",
      "title": "starred() → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Show#starred",
      "name": "starred",
      "tags": "Show#starred starred",
      "summary": "",
      "description": "Shortcut to check if a shows saved in the current Spotify user's library."
    },
    "CategoryManager.html": {
      "id": "CategoryManager.html",
      "kind": "class",
      "title": "CategoryManager",
      "longname": "CategoryManager",
      "name": "CategoryManager",
      "tags": "CategoryManager",
      "summary": "",
      "description": "Manages spotify categories.",
      "body": ""
    },
    "CategoryManager.html#spotify": {
      "id": "CategoryManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "CategoryManager#spotify",
      "name": "spotify",
      "tags": "CategoryManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "CategoryManager.html#get": {
      "id": "CategoryManager.html#get",
      "kind": "function",
      "title": "get( id, country [, locale ] ) → {Promise.&lt;(Category|HTTPError|ApiError)&gt;}",
      "longname": "CategoryManager#get",
      "name": "get",
      "tags": "CategoryManager#get get",
      "summary": "",
      "description": "Get a single category used to tag items in Spotify."
    },
    "CategoryManager.html#all": {
      "id": "CategoryManager.html#all",
      "kind": "function",
      "title": "all( options ) → {Promise.&lt;(Array.&lt;Category&gt;|HTTPError|ApiError)&gt;}",
      "longname": "CategoryManager#all",
      "name": "all",
      "tags": "CategoryManager#all all",
      "summary": "",
      "description": "Get a list of categories used to tag items in Spotify."
    },
    "Track.html": {
      "id": "Track.html",
      "kind": "class",
      "title": "Track",
      "longname": "Track",
      "name": "Track",
      "tags": "Track",
      "summary": "",
      "description": "Represents the track.",
      "body": ""
    },
    "Track.html#spotify": {
      "id": "Track.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "Track#spotify",
      "name": "spotify",
      "tags": "Track#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "Track.html#audio": {
      "id": "Track.html#audio",
      "kind": "member",
      "title": "audio :Audio",
      "longname": "Track#audio",
      "name": "audio",
      "tags": "Track#audio audio",
      "summary": "",
      "description": "Shortcut to the tracks audio."
    },
    "Track.html#save": {
      "id": "Track.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Track#save",
      "name": "save",
      "tags": "Track#save save",
      "summary": "",
      "description": "Shortcut to save the track."
    },
    "Track.html#remove": {
      "id": "Track.html#remove",
      "kind": "function",
      "title": "remove() → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Track#remove",
      "name": "remove",
      "tags": "Track#remove remove",
      "summary": "",
      "description": "Shortcut to remove the track."
    },
    "Track.html#starred": {
      "id": "Track.html#starred",
      "kind": "function",
      "title": "starred() → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "Track#starred",
      "name": "starred",
      "tags": "Track#starred starred",
      "summary": "",
      "description": "Shortcut to check if a songs saved in the current Spotify user's 'Your Music' library."
    },
    "Track.html#queue": {
      "id": "Track.html#queue",
      "kind": "function",
      "title": "queue( device ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "Track#queue",
      "name": "queue",
      "tags": "Track#queue queue",
      "summary": "",
      "description": "Shortcut to queue a track."
    },
    "EpisodeManager.html": {
      "id": "EpisodeManager.html",
      "kind": "class",
      "title": "EpisodeManager",
      "longname": "EpisodeManager",
      "name": "EpisodeManager",
      "tags": "EpisodeManager",
      "summary": "",
      "description": "Manages spotify episodes.",
      "body": ""
    },
    "EpisodeManager.html#spotify": {
      "id": "EpisodeManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "EpisodeManager#spotify",
      "name": "spotify",
      "tags": "EpisodeManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "EpisodeManager.html#get": {
      "id": "EpisodeManager.html#get",
      "kind": "function",
      "title": "get( id ) → {Promise.&lt;(Episode|HTTPError|ApiError)&gt;}",
      "longname": "EpisodeManager#get",
      "name": "get",
      "tags": "EpisodeManager#get get",
      "summary": "",
      "description": "Get Spotify catalog information for a single episode identified by its unique Spotify ID."
    },
    "EpisodeManager.html#users": {
      "id": "EpisodeManager.html#users",
      "kind": "function",
      "title": "users( options ) → {Promise.&lt;(Array.&lt;Episode&gt;|HTTPError|ApiError)&gt;}",
      "longname": "EpisodeManager#users",
      "name": "users",
      "tags": "EpisodeManager#users users",
      "summary": "",
      "description": "Get a list of the episodes saved in the current Spotify user's library."
    },
    "EpisodeManager.html#save": {
      "id": "EpisodeManager.html#save",
      "kind": "function",
      "title": "save( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "EpisodeManager#save",
      "name": "save",
      "tags": "EpisodeManager#save save",
      "summary": "",
      "description": "Save one or more episodes to the current user's library."
    },
    "EpisodeManager.html#remove": {
      "id": "EpisodeManager.html#remove",
      "kind": "function",
      "title": "remove( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "EpisodeManager#remove",
      "name": "remove",
      "tags": "EpisodeManager#remove remove",
      "summary": "",
      "description": "Remove one or more episodes from the current user's library."
    },
    "EpisodeManager.html#starred": {
      "id": "EpisodeManager.html#starred",
      "kind": "function",
      "title": "starred( ids ) → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "EpisodeManager#starred",
      "name": "starred",
      "tags": "EpisodeManager#starred starred",
      "summary": "",
      "description": "Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library."
    },
    "EpisodeManager.html#search": {
      "id": "EpisodeManager.html#search",
      "kind": "function",
      "title": "search( query, options ) → {Promise.&lt;(Array.&lt;Episode&gt;|HTTPError|ApiError)&gt;}",
      "longname": "EpisodeManager#search",
      "name": "search",
      "tags": "EpisodeManager#search search",
      "summary": "",
      "description": "Get Spotify catalog information about episodes."
    },
    "PlayerManager.html": {
      "id": "PlayerManager.html",
      "kind": "class",
      "title": "PlayerManager",
      "longname": "PlayerManager",
      "name": "PlayerManager",
      "tags": "PlayerManager",
      "summary": "",
      "description": "Manages spotify playing.",
      "body": ""
    },
    "PlayerManager.html#spotify": {
      "id": "PlayerManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "PlayerManager#spotify",
      "name": "spotify",
      "tags": "PlayerManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "PlayerManager.html#state": {
      "id": "PlayerManager.html#state",
      "kind": "function",
      "title": "state( [ types ] ) → {Promise.&lt;(State|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#state",
      "name": "state",
      "tags": "PlayerManager#state state",
      "summary": "",
      "description": "Get information about the user's current playback state."
    },
    "PlayerManager.html#transfer": {
      "id": "PlayerManager.html#transfer",
      "kind": "function",
      "title": "transfer( id [, play ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#transfer",
      "name": "transfer",
      "tags": "PlayerManager#transfer transfer",
      "summary": "",
      "description": "Transfer playback to a new device and determine if it should start playing."
    },
    "PlayerManager.html#devices": {
      "id": "PlayerManager.html#devices",
      "kind": "function",
      "title": "devices() → {Promise.&lt;(Array.&lt;Device&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#devices",
      "name": "devices",
      "tags": "PlayerManager#devices devices",
      "summary": "",
      "description": "Get information about a user’s available devices."
    },
    "PlayerManager.html#current": {
      "id": "PlayerManager.html#current",
      "kind": "function",
      "title": "current( [ types ] ) → {Promise.&lt;(Track|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#current",
      "name": "current",
      "tags": "PlayerManager#current current",
      "summary": "",
      "description": "Get the object currently being played on the user's Spotify account."
    },
    "PlayerManager.html#start": {
      "id": "PlayerManager.html#start",
      "kind": "function",
      "title": "start( uri [, options ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#start",
      "name": "start",
      "tags": "PlayerManager#start start",
      "summary": "",
      "description": "Start a new context."
    },
    "PlayerManager.html#resume": {
      "id": "PlayerManager.html#resume",
      "kind": "function",
      "title": "resume( [ device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#resume",
      "name": "resume",
      "tags": "PlayerManager#resume resume",
      "summary": "",
      "description": "Resume current playback on the user's active device."
    },
    "PlayerManager.html#pause": {
      "id": "PlayerManager.html#pause",
      "kind": "function",
      "title": "pause( [ device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#pause",
      "name": "pause",
      "tags": "PlayerManager#pause pause",
      "summary": "",
      "description": "Pause playback on the user's account."
    },
    "PlayerManager.html#next": {
      "id": "PlayerManager.html#next",
      "kind": "function",
      "title": "next( [ device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#next",
      "name": "next",
      "tags": "PlayerManager#next next",
      "summary": "",
      "description": "Skips to next track in the user’s queue."
    },
    "PlayerManager.html#back": {
      "id": "PlayerManager.html#back",
      "kind": "function",
      "title": "back( [ device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#back",
      "name": "back",
      "tags": "PlayerManager#back back",
      "summary": "",
      "description": "Skips to previous track in the user’s queue."
    },
    "PlayerManager.html#seek": {
      "id": "PlayerManager.html#seek",
      "kind": "function",
      "title": "seek( ms [, device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#seek",
      "name": "seek",
      "tags": "PlayerManager#seek seek",
      "summary": "",
      "description": "Seeks to the given position in the user’s currently playing track."
    },
    "PlayerManager.html#repeat": {
      "id": "PlayerManager.html#repeat",
      "kind": "function",
      "title": "repeat( state [, device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#repeat",
      "name": "repeat",
      "tags": "PlayerManager#repeat repeat",
      "summary": "",
      "description": "Set the repeat mode for the user's playback. Options are repeat-track, repeat-context, and off."
    },
    "PlayerManager.html#volume": {
      "id": "PlayerManager.html#volume",
      "kind": "function",
      "title": "volume( vol [, device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#volume",
      "name": "volume",
      "tags": "PlayerManager#volume volume",
      "summary": "",
      "description": "Set the volume for the user’s current playback device."
    },
    "PlayerManager.html#shuffle": {
      "id": "PlayerManager.html#shuffle",
      "kind": "function",
      "title": "shuffle( state [, device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#shuffle",
      "name": "shuffle",
      "tags": "PlayerManager#shuffle shuffle",
      "summary": "",
      "description": "Toggle shuffle on or off for user’s playback."
    },
    "PlayerManager.html#recent": {
      "id": "PlayerManager.html#recent",
      "kind": "function",
      "title": "recent( options ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#recent",
      "name": "recent",
      "tags": "PlayerManager#recent recent",
      "summary": "",
      "description": "Get tracks from the current user's recently played tracks. Note: Currently doesn't support podcast episodes."
    },
    "PlayerManager.html#queue": {
      "id": "PlayerManager.html#queue",
      "kind": "function",
      "title": "queue( uri [, device ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlayerManager#queue",
      "name": "queue",
      "tags": "PlayerManager#queue queue",
      "summary": "",
      "description": "Add an item to the end of the user's current playback queue."
    },
    "AlbumManager.html": {
      "id": "AlbumManager.html",
      "kind": "class",
      "title": "AlbumManager",
      "longname": "AlbumManager",
      "name": "AlbumManager",
      "tags": "AlbumManager",
      "summary": "",
      "description": "Manages spotify albums.",
      "body": ""
    },
    "AlbumManager.html#spotify": {
      "id": "AlbumManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "AlbumManager#spotify",
      "name": "spotify",
      "tags": "AlbumManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "AlbumManager.html#get": {
      "id": "AlbumManager.html#get",
      "kind": "function",
      "title": "get( id ) → {Promise.&lt;(Album|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#get",
      "name": "get",
      "tags": "AlbumManager#get get",
      "summary": "",
      "description": "Get Spotify catalog information for a single album."
    },
    "AlbumManager.html#tracks": {
      "id": "AlbumManager.html#tracks",
      "kind": "function",
      "title": "tracks( id, options ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#tracks",
      "name": "tracks",
      "tags": "AlbumManager#tracks tracks",
      "summary": "",
      "description": "Get Spotify catalog information about an album’s tracks."
    },
    "AlbumManager.html#saved": {
      "id": "AlbumManager.html#saved",
      "kind": "function",
      "title": "saved( options ) → {Promise.&lt;(Array.&lt;Album&gt;|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#saved",
      "name": "saved",
      "tags": "AlbumManager#saved saved",
      "summary": "",
      "description": "Get a list of the albums saved in the current Spotify user's 'Your Music' library."
    },
    "AlbumManager.html#save": {
      "id": "AlbumManager.html#save",
      "kind": "function",
      "title": "save( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#save",
      "name": "save",
      "tags": "AlbumManager#save save",
      "summary": "",
      "description": "Save one or more albums to the current user's 'Your Music' library."
    },
    "AlbumManager.html#remove": {
      "id": "AlbumManager.html#remove",
      "kind": "function",
      "title": "remove( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#remove",
      "name": "remove",
      "tags": "AlbumManager#remove remove",
      "summary": "",
      "description": "Remove one or more albums to the current user's 'Your Music' library."
    },
    "AlbumManager.html#starred": {
      "id": "AlbumManager.html#starred",
      "kind": "function",
      "title": "starred( ids ) → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#starred",
      "name": "starred",
      "tags": "AlbumManager#starred starred",
      "summary": "",
      "description": "Check if one or more albums is already saved in the current Spotify user's 'Your Music' library."
    },
    "AlbumManager.html#releases": {
      "id": "AlbumManager.html#releases",
      "kind": "function",
      "title": "releases( options ) → {Promise.&lt;(Array.&lt;Album&gt;|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#releases",
      "name": "releases",
      "tags": "AlbumManager#releases releases",
      "summary": "",
      "description": "Get a list of new album releases featured in Spotify."
    },
    "AlbumManager.html#search": {
      "id": "AlbumManager.html#search",
      "kind": "function",
      "title": "search( query, options ) → {Promise.&lt;(Array.&lt;Album&gt;|HTTPError|ApiError)&gt;}",
      "longname": "AlbumManager#search",
      "name": "search",
      "tags": "AlbumManager#search search",
      "summary": "",
      "description": "Get Spotify catalog information about albums."
    },
    "PlaylistManager.html": {
      "id": "PlaylistManager.html",
      "kind": "class",
      "title": "PlaylistManager",
      "longname": "PlaylistManager",
      "name": "PlaylistManager",
      "tags": "PlaylistManager",
      "summary": "",
      "description": "Manages spotify playing.",
      "body": ""
    },
    "PlaylistManager.html#spotify": {
      "id": "PlaylistManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "PlaylistManager#spotify",
      "name": "spotify",
      "tags": "PlaylistManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "PlaylistManager.html#get": {
      "id": "PlaylistManager.html#get",
      "kind": "function",
      "title": "get( id, options ) → {Promise.&lt;(Playlist|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#get",
      "name": "get",
      "tags": "PlaylistManager#get get",
      "summary": "",
      "description": "Get a playlist owned by a Spotify user."
    },
    "PlaylistManager.html#modify": {
      "id": "PlaylistManager.html#modify",
      "kind": "function",
      "title": "modify( id, options ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#modify",
      "name": "modify",
      "tags": "PlaylistManager#modify modify",
      "summary": "",
      "description": "Change a playlist's name and public/private state. (The user must, of course, own the playlist.)"
    },
    "PlaylistManager.html#update": {
      "id": "PlaylistManager.html#update",
      "kind": "function",
      "title": "update( id, options ) → {Status|HTTPError|ApiError}",
      "longname": "PlaylistManager#update",
      "name": "update",
      "tags": "PlaylistManager#update update",
      "summary": "",
      "description": "Either reorder or replace items in a playlist depending on the request's parameters."
    },
    "PlaylistManager.html#tracks": {
      "id": "PlaylistManager.html#tracks",
      "kind": "function",
      "title": "tracks( id, options ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#tracks",
      "name": "tracks",
      "tags": "PlaylistManager#tracks tracks",
      "summary": "",
      "description": "Get full details of the items of a playlist owned by a Spotify user."
    },
    "PlaylistManager.html#add": {
      "id": "PlaylistManager.html#add",
      "kind": "function",
      "title": "add( id, uris [, position ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#add",
      "name": "add",
      "tags": "PlaylistManager#add add",
      "summary": "",
      "description": "Add one or more items to a user's playlist."
    },
    "PlaylistManager.html#remove": {
      "id": "PlaylistManager.html#remove",
      "kind": "function",
      "title": "remove( id, uris [, snapshot ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#remove",
      "name": "remove",
      "tags": "PlaylistManager#remove remove",
      "summary": "",
      "description": "Remove one or more items from a user's playlist."
    },
    "PlaylistManager.html#users": {
      "id": "PlaylistManager.html#users",
      "kind": "function",
      "title": "users( [ id ], options ) → {Promise.&lt;(Array.&lt;Playlist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#users",
      "name": "users",
      "tags": "PlaylistManager#users users",
      "summary": "",
      "description": "Get a list of the playlists owned or followed by the current Spotify user."
    },
    "PlaylistManager.html#follow": {
      "id": "PlaylistManager.html#follow",
      "kind": "function",
      "title": "follow( id [, state ] ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#follow",
      "name": "follow",
      "tags": "PlaylistManager#follow follow",
      "summary": "",
      "description": "Add the current user as a follower of a playlist."
    },
    "PlaylistManager.html#unfollow": {
      "id": "PlaylistManager.html#unfollow",
      "kind": "function",
      "title": "unfollow( id ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#unfollow",
      "name": "unfollow",
      "tags": "PlaylistManager#unfollow unfollow",
      "summary": "",
      "description": "Remove the current user as a follower of a playlist."
    },
    "PlaylistManager.html#followers": {
      "id": "PlaylistManager.html#followers",
      "kind": "function",
      "title": "followers( id, users ) → {Array.&lt;boolean&gt;|HTTPError|ApiError}",
      "longname": "PlaylistManager#followers",
      "name": "followers",
      "tags": "PlaylistManager#followers followers",
      "summary": "",
      "description": "Check to see if one or more Spotify users are following a specified playlist."
    },
    "PlaylistManager.html#create": {
      "id": "PlaylistManager.html#create",
      "kind": "function",
      "title": "create( id, options ) → {Promise.&lt;(Playlist|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#create",
      "name": "create",
      "tags": "PlaylistManager#create create",
      "summary": "",
      "description": "Create a playlist for a Spotify user."
    },
    "PlaylistManager.html#featured": {
      "id": "PlaylistManager.html#featured",
      "kind": "function",
      "title": "featured( [ options ] ) → {Promise.&lt;(Array.&lt;Playlist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#featured",
      "name": "featured",
      "tags": "PlaylistManager#featured featured",
      "summary": "",
      "description": "Get a list of Spotify featured playlists."
    },
    "PlaylistManager.html#categories": {
      "id": "PlaylistManager.html#categories",
      "kind": "function",
      "title": "categories( id, options ) → {Promise.&lt;(Array.&lt;Playlist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#categories",
      "name": "categories",
      "tags": "PlaylistManager#categories categories",
      "summary": "",
      "description": "Get a list of Spotify playlists tagged with a particular category."
    },
    "PlaylistManager.html#cover": {
      "id": "PlaylistManager.html#cover",
      "kind": "function",
      "title": "cover( id [, image ] ) → {Promise.&lt;(Image|Status|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#cover",
      "name": "cover",
      "tags": "PlaylistManager#cover cover",
      "summary": "",
      "description": "Get the current image associated with a specific playlist."
    },
    "PlaylistManager.html#search": {
      "id": "PlaylistManager.html#search",
      "kind": "function",
      "title": "search( query, options ) → {Promise.&lt;(Array.&lt;Playlist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "PlaylistManager#search",
      "name": "search",
      "tags": "PlaylistManager#search search",
      "summary": "",
      "description": "Get Spotify catalog information about playlists."
    },
    "ShowManager.html": {
      "id": "ShowManager.html",
      "kind": "class",
      "title": "ShowManager",
      "longname": "ShowManager",
      "name": "ShowManager",
      "tags": "ShowManager",
      "summary": "",
      "description": "Manages spotify playing.",
      "body": ""
    },
    "ShowManager.html#spotify": {
      "id": "ShowManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "ShowManager#spotify",
      "name": "spotify",
      "tags": "ShowManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "ShowManager.html#get": {
      "id": "ShowManager.html#get",
      "kind": "function",
      "title": "get( id ) → {Promise.&lt;(Show|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#get",
      "name": "get",
      "tags": "ShowManager#get get",
      "summary": "",
      "description": "Get Spotify catalog information for a single show identified by its unique Spotify ID."
    },
    "ShowManager.html#episodes": {
      "id": "ShowManager.html#episodes",
      "kind": "function",
      "title": "episodes( id, options ) → {Promise.&lt;(Array.&lt;Episode&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#episodes",
      "name": "episodes",
      "tags": "ShowManager#episodes episodes",
      "summary": "",
      "description": "Get Spotify catalog information about an show’s episodes."
    },
    "ShowManager.html#users": {
      "id": "ShowManager.html#users",
      "kind": "function",
      "title": "users( options ) → {Promise.&lt;(Array.&lt;Show&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#users",
      "name": "users",
      "tags": "ShowManager#users users",
      "summary": "",
      "description": "Get a list of shows saved in the current Spotify user's library."
    },
    "ShowManager.html#save": {
      "id": "ShowManager.html#save",
      "kind": "function",
      "title": "save( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#save",
      "name": "save",
      "tags": "ShowManager#save save",
      "summary": "",
      "description": "Save one or more shows to current Spotify user's library."
    },
    "ShowManager.html#remove": {
      "id": "ShowManager.html#remove",
      "kind": "function",
      "title": "remove( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#remove",
      "name": "remove",
      "tags": "ShowManager#remove remove",
      "summary": "",
      "description": "Delete one or more shows from current Spotify user's library."
    },
    "ShowManager.html#starred": {
      "id": "ShowManager.html#starred",
      "kind": "function",
      "title": "starred( ids ) → {Promise.&lt;(boolean|Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#starred",
      "name": "starred",
      "tags": "ShowManager#starred starred",
      "summary": "",
      "description": "Check if one or more shows is already saved in the current Spotify user's library."
    },
    "ShowManager.html#search": {
      "id": "ShowManager.html#search",
      "kind": "function",
      "title": "search( query, options ) → {Promise.&lt;(Array.&lt;Show&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ShowManager#search",
      "name": "search",
      "tags": "ShowManager#search search",
      "summary": "",
      "description": "Get Spotify catalog information about shows."
    },
    "TrackManager.html": {
      "id": "TrackManager.html",
      "kind": "class",
      "title": "TrackManager",
      "longname": "TrackManager",
      "name": "TrackManager",
      "tags": "TrackManager",
      "summary": "",
      "description": "Manages spotify tracks.",
      "body": ""
    },
    "TrackManager.html#spotify": {
      "id": "TrackManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "TrackManager#spotify",
      "name": "spotify",
      "tags": "TrackManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "TrackManager.html#audio": {
      "id": "TrackManager.html#audio",
      "kind": "member",
      "title": "audio :Audio",
      "longname": "TrackManager#audio",
      "name": "audio",
      "tags": "TrackManager#audio audio",
      "summary": "",
      "description": "The audio features."
    },
    "TrackManager.html#get": {
      "id": "TrackManager.html#get",
      "kind": "function",
      "title": "get( id ) → {Promise.&lt;(Track|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#get",
      "name": "get",
      "tags": "TrackManager#get get",
      "summary": "",
      "description": "Get Spotify catalog information for a single track identified by its unique Spotify ID."
    },
    "TrackManager.html#saved": {
      "id": "TrackManager.html#saved",
      "kind": "function",
      "title": "saved( options ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#saved",
      "name": "saved",
      "tags": "TrackManager#saved saved",
      "summary": "",
      "description": "Get a list of the songs saved in the current Spotify user's 'Your Music' library."
    },
    "TrackManager.html#save": {
      "id": "TrackManager.html#save",
      "kind": "function",
      "title": "save( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#save",
      "name": "save",
      "tags": "TrackManager#save save",
      "summary": "",
      "description": "Save one or more tracks to the current user's 'Your Music' library."
    },
    "TrackManager.html#remove": {
      "id": "TrackManager.html#remove",
      "kind": "function",
      "title": "remove( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#remove",
      "name": "remove",
      "tags": "TrackManager#remove remove",
      "summary": "",
      "description": "Remove one or more tracks from the current user's 'Your Music' library."
    },
    "TrackManager.html#starred": {
      "id": "TrackManager.html#starred",
      "kind": "function",
      "title": "starred( ids ) → {Promise.&lt;(Array.&lt;boolean&gt;|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#starred",
      "name": "starred",
      "tags": "TrackManager#starred starred",
      "summary": "",
      "description": "Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library."
    },
    "TrackManager.html#search": {
      "id": "TrackManager.html#search",
      "kind": "function",
      "title": "search( query, options ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#search",
      "name": "search",
      "tags": "TrackManager#search search",
      "summary": "",
      "description": "Get Spotify catalog information about tracks."
    },
    "TrackManager.html#recommendations": {
      "id": "TrackManager.html#recommendations",
      "kind": "function",
      "title": "recommendations( options ) → {Promise.&lt;(Array.&lt;Tracks&gt;|HTTPError|ApiError)&gt;}",
      "longname": "TrackManager#recommendations",
      "name": "recommendations",
      "tags": "TrackManager#recommendations recommendations",
      "summary": "",
      "description": "Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks."
    },
    "ArtistManager.html": {
      "id": "ArtistManager.html",
      "kind": "class",
      "title": "ArtistManager",
      "longname": "ArtistManager",
      "name": "ArtistManager",
      "tags": "ArtistManager",
      "summary": "",
      "description": "Manages spotify artist.",
      "body": ""
    },
    "ArtistManager.html#spotify": {
      "id": "ArtistManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "ArtistManager#spotify",
      "name": "spotify",
      "tags": "ArtistManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "ArtistManager.html#get": {
      "id": "ArtistManager.html#get",
      "kind": "function",
      "title": "get( id ) → {Promise.&lt;(Artist|HTTPError|ApiError)&gt;}",
      "longname": "ArtistManager#get",
      "name": "get",
      "tags": "ArtistManager#get get",
      "summary": "",
      "description": "Get Spotify catalog information for a single artist identified by their unique Spotify ID."
    },
    "ArtistManager.html#follow": {
      "id": "ArtistManager.html#follow",
      "kind": "function",
      "title": "follow( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "ArtistManager#follow",
      "name": "follow",
      "tags": "ArtistManager#follow follow",
      "summary": "",
      "description": "Add the current user as a follower of one or more artists."
    },
    "ArtistManager.html#unfollow": {
      "id": "ArtistManager.html#unfollow",
      "kind": "function",
      "title": "unfollow( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "ArtistManager#unfollow",
      "name": "unfollow",
      "tags": "ArtistManager#unfollow unfollow",
      "summary": "",
      "description": "Remove the current user as a follower of one or more artists."
    },
    "ArtistManager.html#following": {
      "id": "ArtistManager.html#following",
      "kind": "function",
      "title": "following( ids, users ) → {Array.&lt;boolean&gt;|HTTPError|ApiError}",
      "longname": "ArtistManager#following",
      "name": "following",
      "tags": "ArtistManager#following following",
      "summary": "",
      "description": "Check to see if the current user is following one or more artists."
    },
    "ArtistManager.html#top": {
      "id": "ArtistManager.html#top",
      "kind": "function",
      "title": "top( id, country ) → {Promise.&lt;(Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ArtistManager#top",
      "name": "top",
      "tags": "ArtistManager#top top",
      "summary": "",
      "description": "Get Spotify catalog information about an artist's top tracks by country."
    },
    "ArtistManager.html#related": {
      "id": "ArtistManager.html#related",
      "kind": "function",
      "title": "related( id ) → {Promise.&lt;(Array.&lt;Artist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ArtistManager#related",
      "name": "related",
      "tags": "ArtistManager#related related",
      "summary": "",
      "description": "Get Spotify catalog information about artists similar to a given artist."
    },
    "ArtistManager.html#search": {
      "id": "ArtistManager.html#search",
      "kind": "function",
      "title": "search( query, options ) → {Promise.&lt;(Array.&lt;Artist&gt;|HTTPError|ApiError)&gt;}",
      "longname": "ArtistManager#search",
      "name": "search",
      "tags": "ArtistManager#search search",
      "summary": "",
      "description": "Get Spotify catalog information about artists."
    },
    "UserManager.html": {
      "id": "UserManager.html",
      "kind": "class",
      "title": "UserManager",
      "longname": "UserManager",
      "name": "UserManager",
      "tags": "UserManager",
      "summary": "",
      "description": "Manages spotify users.",
      "body": ""
    },
    "UserManager.html#spotify": {
      "id": "UserManager.html#spotify",
      "kind": "member",
      "title": "spotify :Spotify",
      "longname": "UserManager#spotify",
      "name": "spotify",
      "tags": "UserManager#spotify spotify",
      "summary": "",
      "description": "The spotify client."
    },
    "UserManager.html#get": {
      "id": "UserManager.html#get",
      "kind": "function",
      "title": "get( id ) → {Promise.&lt;(User|HTTPError|ApiError)&gt;}",
      "longname": "UserManager#get",
      "name": "get",
      "tags": "UserManager#get get",
      "summary": "",
      "description": "Get public profile information about a Spotify user."
    },
    "UserManager.html#top": {
      "id": "UserManager.html#top",
      "kind": "function",
      "title": "top( type, options ) → {Promise.&lt;(Array.&lt;Artist&gt;|Array.&lt;Track&gt;|HTTPError|ApiError)&gt;}",
      "longname": "UserManager#top",
      "name": "top",
      "tags": "UserManager#top top",
      "summary": "",
      "description": "Get the current user's top artists or tracks based on calculated affinity."
    },
    "UserManager.html#followed": {
      "id": "UserManager.html#followed",
      "kind": "function",
      "title": "followed( options ) → {Array.&lt;Artist&gt;|HTTPError|ApiError}",
      "longname": "UserManager#followed",
      "name": "followed",
      "tags": "UserManager#followed followed",
      "summary": "",
      "description": "Get the current user's followed artists."
    },
    "UserManager.html#follow": {
      "id": "UserManager.html#follow",
      "kind": "function",
      "title": "follow( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "UserManager#follow",
      "name": "follow",
      "tags": "UserManager#follow follow",
      "summary": "",
      "description": "Add the current user as a follower of one or more user."
    },
    "UserManager.html#unfollow": {
      "id": "UserManager.html#unfollow",
      "kind": "function",
      "title": "unfollow( ids ) → {Promise.&lt;(Status|HTTPError|ApiError)&gt;}",
      "longname": "UserManager#unfollow",
      "name": "unfollow",
      "tags": "UserManager#unfollow unfollow",
      "summary": "",
      "description": "Remove the current user as a follower of one or more user."
    },
    "UserManager.html#following": {
      "id": "UserManager.html#following",
      "kind": "function",
      "title": "following( ids, users ) → {Array.&lt;boolean&gt;|HTTPError|ApiError}",
      "longname": "UserManager#following",
      "name": "following",
      "tags": "UserManager#following following",
      "summary": "",
      "description": "Check to see if the current user is following one or more users."
    },
    "UserManager.html#me": {
      "id": "UserManager.html#me",
      "kind": "function",
      "title": "me() → {Promise.&lt;(User|HTTPError|ApiError)&gt;}",
      "longname": "UserManager#me",
      "name": "me",
      "tags": "UserManager#me me",
      "summary": "",
      "description": "Get detailed profile information about the current user (including the current user's username)."
    },
    "Spotify.html": {
      "id": "Spotify.html",
      "kind": "class",
      "title": "Spotify",
      "longname": "Spotify",
      "name": "Spotify",
      "tags": "Spotify",
      "summary": "",
      "description": "Spotify Client.",
      "body": ""
    },
    "Spotify.html#access_token": {
      "id": "Spotify.html#access_token",
      "kind": "member",
      "title": "access_token :string",
      "longname": "Spotify#access_token",
      "name": "access_token",
      "tags": "Spotify#access_token access_token",
      "summary": "",
      "description": "The client's access token."
    },
    "Spotify.html#util": {
      "id": "Spotify.html#util",
      "kind": "member",
      "title": "util :Util",
      "longname": "Spotify#util",
      "name": "util",
      "tags": "Spotify#util util",
      "summary": "",
      "description": "The util for the spotify client."
    },
    "Spotify.html#player": {
      "id": "Spotify.html#player",
      "kind": "member",
      "title": "player :PlayerManager",
      "longname": "Spotify#player",
      "name": "player",
      "tags": "Spotify#player player",
      "summary": "",
      "description": "The Player Manager."
    },
    "Spotify.html#tracks": {
      "id": "Spotify.html#tracks",
      "kind": "member",
      "title": "tracks :TrackManager",
      "longname": "Spotify#tracks",
      "name": "tracks",
      "tags": "Spotify#tracks tracks",
      "summary": "",
      "description": "The Track Manager."
    },
    "Spotify.html#playlists": {
      "id": "Spotify.html#playlists",
      "kind": "member",
      "title": "playlists :PlaylistManager",
      "longname": "Spotify#playlists",
      "name": "playlists",
      "tags": "Spotify#playlists playlists",
      "summary": "",
      "description": "The Playlist Manager."
    },
    "Spotify.html#episodes": {
      "id": "Spotify.html#episodes",
      "kind": "member",
      "title": "episodes :ShowManager",
      "longname": "Spotify#episodes",
      "name": "episodes",
      "tags": "Spotify#episodes episodes",
      "summary": "",
      "description": "The Episode Manager."
    },
    "Spotify.html#shows": {
      "id": "Spotify.html#shows",
      "kind": "member",
      "title": "shows :ShowManager",
      "longname": "Spotify#shows",
      "name": "shows",
      "tags": "Spotify#shows shows",
      "summary": "",
      "description": "The Show Manager."
    },
    "Spotify.html#albums": {
      "id": "Spotify.html#albums",
      "kind": "member",
      "title": "albums :AlbumManager",
      "longname": "Spotify#albums",
      "name": "albums",
      "tags": "Spotify#albums albums",
      "summary": "",
      "description": "The Album Manager."
    },
    "Spotify.html#artists": {
      "id": "Spotify.html#artists",
      "kind": "member",
      "title": "artists :ArtistManager",
      "longname": "Spotify#artists",
      "name": "artists",
      "tags": "Spotify#artists artists",
      "summary": "",
      "description": "The Artist Manager."
    },
    "Spotify.html#categories": {
      "id": "Spotify.html#categories",
      "kind": "member",
      "title": "categories :CategoryManager",
      "longname": "Spotify#categories",
      "name": "categories",
      "tags": "Spotify#categories categories",
      "summary": "",
      "description": "The Category Manager."
    },
    "Spotify.html#users": {
      "id": "Spotify.html#users",
      "kind": "member",
      "title": "users :UserManager",
      "longname": "Spotify#users",
      "name": "users",
      "tags": "Spotify#users users",
      "summary": "",
      "description": "The User Manager."
    },
    "Spotify.html#refresher": {
      "id": "Spotify.html#refresher",
      "kind": "member",
      "title": "refresher :Refresher|null",
      "longname": "Spotify#refresher",
      "name": "refresher",
      "tags": "Spotify#refresher refresher",
      "summary": "",
      "description": "The Refresher from node module 'spotify-oauth2'"
    },
    "Spotify.html#genres": {
      "id": "Spotify.html#genres",
      "kind": "function",
      "title": "genres() → {Promise.&lt;Array.&lt;string&gt;&gt;}",
      "longname": "Spotify#genres",
      "name": "genres",
      "tags": "Spotify#genres genres",
      "summary": "",
      "description": "Retrieve a list of available genres seed"
    },
    "Spotify.html#markets": {
      "id": "Spotify.html#markets",
      "kind": "function",
      "title": "markets() → {Promise.&lt;Array.&lt;string&gt;&gt;}",
      "longname": "Spotify#markets",
      "name": "markets",
      "tags": "Spotify#markets markets",
      "summary": "",
      "description": "Get the list of markets where Spotify is available."
    },
    "Spotify.html#set": {
      "id": "Spotify.html#set",
      "kind": "function",
      "title": "set( key, value ) → {void}",
      "longname": "Spotify#set",
      "name": "set",
      "tags": "Spotify#set set",
      "summary": "",
      "description": "Set a property of the spotify client."
    }
  }
};