let start_time = document.getElementById('start_time');
let stop_time = document.getElementById('stop_time');
let reset_time = document.getElementById('reset_time');
let sec_time = document.getElementById('sec_time');


let sm_time = document.getElementById('sm_time');

start_time.addEventListener('click', start_my_timer, true);


function start_my_timer(e){	
	e.preventDefault();


	if(this.running = true){

	let second = 0;
	let count = 0;
	var start_time_Intv = setInterval(()=>{	
		if(count<99){
			count++
		
		sm_time.innerHTML = count;

	}else{
		count = 0;

		second++

		sec_time.innerHTML = second;

	}
		
		

	}, 10)


		stop_time.addEventListener('click',stop_my_time);

		function stop_my_time(){
			clearInterval(start_time_Intv);
		}


	 	reset_time.addEventListener('click', reset_all)

		function reset_all(){

			clearInterval(start_time_Intv);

			sm_time.innerHTML = "00";
			sec_time.innerHTML = "00";
		}

	}else{
		return this.running = alert("Timer Is Running")
	}
	





}

