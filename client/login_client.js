Session.set("currentUser", undefined)

function draw() {
	console.log(document.getElementById('myCanvas'))
  var ctx = document.getElementById('myCanvas').getContext('2d');

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (30, 30, 55, 50);
}

Handlebars.registerHelper('currentUser', function(){
	return Session.get("currentUser")
})
Handlebars.registerHelper('loggedInUsers', function(){
	return Users.find({}).fetch()
})



var login = function () {
	username = document.getElementById("loginField").innerHTML
	if (Users.findOne({username: username}) == undefined) {
		Users.insert({
			username: username, 
			loggedIn: true, 
			volume: 0
		})
	}
	Session.set("currentUser", Users.findOne({username: username}))
	draw()
}

Template.login.events({
	'keydown #loginField': function (evt) {
	  if (evt.keyCode == 13) {
	    login()
	  }
	},
})

Template.logout.events({
	'click #logo	ut': function (evt) {
	  Session.set("currentUser", undefined)
	},
})