window.addEventListener('scroll', stop);

		var scrollTopCheck = true;
		function stop() {
			if(window.pageYOffset > 100) {
				if(scrollTopCheck==true) {
					document.getElementById('fix').style.top = "-100px";
					setInterval(function(){
						document.getElementById('fix').style.top = "0px";
					}, 100);
					scrollTopCheck = false;
				}
				document.getElementById('fix').style.position='fixed';
			}
			if(window.pageYOffset <= 100) {

				scrollTopCheck = true;
				document.getElementById('fix').style.position='absolute';
			}
		}

		document.getElementById('rotate1').addEventListener('click', rotate1);

		var rotate1Check = false;
		var rotate2Check = false;
		var rotate3Check = false;
		var rotate4Check = false;

		function rotate1() {
			var x = document.getElementById('rotate1');
			if(rotate1Check == false) {
				x.style.transform='rotateY(180deg) scaleX(-1)';
				document.getElementById('image1').style.display='none';
				document.getElementById('backrotate1').style.visibility='visible';
				rotate1Check = true;
			} else {
				x.style.transform='rotateY(0) scaleX(1)';
				document.getElementById('image1').style.display='block';
				document.getElementById('backrotate1').style.visibility='hidden';
				rotate1Check = false
			}
		}

		document.getElementById('rotate2').addEventListener('click', rotate2);

		function rotate2() {
			var x = document.getElementById('rotate2');
			if(rotate2Check == false) {
				x.style.transform='rotateY(180deg) scaleX(-1)';
				document.getElementById('image2').style.display='none';
				document.getElementById('backrotate2').style.visibility='visible';
				rotate2Check = true;
			} else {
				x.style.transform='rotateY(0) scaleX(1)';
				document.getElementById('image2').style.display='block';
				document.getElementById('backrotate2').style.visibility='hidden';
				rotate2Check = false;
			}
		}

		document.getElementById('rotate3').addEventListener('click', rotate3);

		function rotate3() {
			var x = document.getElementById('rotate3');
			if(rotate3Check == false) {
				x.style.transform='rotateY(180deg) scaleX(-1)';
				document.getElementById('image3').style.display='none';
				document.getElementById('backrotate3').style.visibility='visible';
				rotate3Check = true;
			}  else {
				x.style.transform='rotateY(0) scaleX(1)';
				document.getElementById('image3').style.display='block';
				document.getElementById('backrotate3').style.visibility='hidden';
				rotate3Check = false;
			}
		}

		document.getElementById('rotate4').addEventListener('click', rotate4);

		function rotate4() {
			var x = document.getElementById('rotate4');
			if(rotate4Check == false) {
				x.style.transform='rotateY(180deg) scaleX(-1)';
				document.getElementById('image4').style.display='none';
				document.getElementById('backrotate4').style.visibility='visible';
				rotate4Check = true;
			} else {
				x.style.transform='rotateY(0) scaleX(1)';
				document.getElementById('image4').style.display='block';
				document.getElementById('backrotate4').style.visibility='hidden';
				rotate4Check = false;
			}
		}