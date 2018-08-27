//make connection//make connection
 var socket=io.connect('http://localhost:4000');
//dom query
var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');
//emit event

btn.addEventListener('click',function(){
	socket.emit('chat',{
	        message: message.value,
		handle: handle.value });
	// body.
}); 
	message.addEventListener('keypress', function() {
	socket.emit('typing', handle.value)	;
		// body.
	});

//listen for events
socket.on('chat',function (data) {
	output.innerHTML +='<p><strong>'+ data.handle +':</strong>' + data.message +'</p>';  //storing data	 
}); 

//showing "typing message"
socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';//storing data
});
