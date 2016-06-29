window.onload = function(){
	var oLeft = document.getElementById('left'); 
	var oAdd = document.getElementById('add');
	var oBegin = document.getElementById('begin');
	var oRight = document.getElementById('right');

	var aNum = 1;
	var bBt = true; //控制oBegin的开关
	var tBt = true; //控制按钮的开关
	
	var aArr = [
		{img:"img/A_1.gif",num:1},{img:"img/A_2.gif",num:1},
		{img:"img/A_3.gif",num:1},{img:"img/A_4.gif",num:1},
		{img:"img/2_1.gif",num:2},{img:"img/2_2.gif",num:2},
		{img:"img/2_3.gif",num:2},{img:"img/2_4.gif",num:2},
		{img:"img/3_1.gif",num:3},{img:"img/3_2.gif",num:3},
		{img:"img/3_3.gif",num:3},{img:"img/3_4.gif",num:3},
		{img:"img/4_1.gif",num:4},{img:"img/4_2.gif",num:4},
		{img:"img/4_3.gif",num:4},{img:"img/4_4.gif",num:4},
		{img:"img/5_1.gif",num:5},{img:"img/5_2.gif",num:5},
		{img:"img/5_3.gif",num:5},{img:"img/5_4.gif",num:5},
		{img:"img/6_1.gif",num:6},{img:"img/6_2.gif",num:6},
		{img:"img/6_3.gif",num:6},{img:"img/6_4.gif",num:6},
		{img:"img/7_1.gif",num:7},{img:"img/7_2.gif",num:7},
		{img:"img/7_3.gif",num:7},{img:"img/7_4.gif",num:7},
		{img:"img/8_1.gif",num:8},{img:"img/8_2.gif",num:8},
		{img:"img/8_3.gif",num:8},{img:"img/8_4.gif",num:8},
		{img:"img/9_1.gif",num:9},{img:"img/9_2.gif",num:9},
		{img:"img/9_3.gif",num:9},{img:"img/9_4.gif",num:9},
		{img:"img/10_1.gif",num:10},{img:"img/10_2.gif",num:10},
		{img:"img/10_3.gif",num:10},{img:"img/10_4.gif",num:10},
		{img:"img/J_1.gif",num:10},{img:"img/J_2.gif",num:10},
		{img:"img/J_3.gif",num:10},{img:"img/J_4.gif",num:10},
		{img:"img/Q_1.gif",num:10},{img:"img/Q_2.gif",num:10},
		{img:"img/Q_3.gif",num:10},{img:"img/Q_4.gif",num:10},
		{img:"img/K_1.gif",num:10},{img:"img/K_2.gif",num:10},
		{img:"img/K_3.gif",num:10},{img:"img/K_4.gif",num:10}
		];

	oAdd.onclick = function(){ //添加游戏玩家
		
		if(aNum < 8){
			if( bBt == false){
				alert("请稍等，这句还没有结束!");
			}else{
				var oRemind = document.getElementById('remind');
				oRemind.style.display = 'none';
				aNum++;
				addPlayer(aNum);
			}
		}else{
			alert('玩家太多了，扑克不够用了！！');
		}
	};

	var cDiv = document.getElementsByClassName('div1');
	var cP1 = document.getElementsByClassName('p1');
	var cImg = document.getElementsByClassName('img');
	var cP2 = document.getElementsByClassName('p2');
	
	oLeft.onmouseover = function(){
		var aInput = cP2[0].getElementsByTagName('input');
		//var eb = cDiv[0].getElementsByTagName('b')[1];
		//alert(eb.innerHTML);

		aInput[0].onclick = function(){ //在要一张牌
			if(bBt == false){
				if(tBt){
					var sSpan = cDiv[0].getElementsByTagName('span')[0];
					var index = Math.floor((Math.random()*aArr.length));
					cImg[0].innerHTML +='<img src='+aArr[index].img+' i='+index+'>';
					sSpan.innerHTML = parseInt(sSpan.innerHTML) + parseInt(aArr[index].num);
					
					aArr.splice(index,1);

					if(sSpan.innerHTML>21){
						alert("非常遗憾！，你爆了！");
						bBt = true;
						var eb = cDiv[0].getElementsByTagName('b')[1];
						eb.innerHTML = 2;

						var cText = cDiv[0]. getElementsByTagName('input')[5];
						var eb = cDiv[0].getElementsByTagName('b')[1];
						var ebq = cDiv[0].getElementsByTagName('b')[2];
						
						var ep = parseInt(eb.innerHTML);
						
						cText.value = parseInt(cText.value) - ep*parseInt(ebq.innerHTML);
						if(cText.value <= 0){
							alert("很遗憾，您输光了！");
							cText.value = 0;
						}
					}
					if(aArr.length == 0){
						alert("没牌了！");
					}
				}	
			}else{
				alert("游戏还没有开始！请耐心等待！");
			}
		};

		aInput[1].onclick = function(){//加倍
			if(tBt){
				var eb = cDiv[0].getElementsByTagName('b')[1];
				var ep = parseInt(eb.innerHTML);
				eb.innerHTML = ep * 2;
			}
		};

		aInput[2].onclick = function(){//不要了
			if(bBt == false){
				tBt = false;
			}else{
				alert("游戏还没有开始！请耐心等待！");
			}
		};

		aInput[3].onclick = function(){//退出
			if(tBt){
				var iParent = this.parentNode.parentNode;
				var tParent = this.parentNode.parentNode.parentNode;
				tParent.removeChild(iParent);
			}			
		};

		aInput[4].onclick = function(){//保险
			if(tBt){
				var Aimg = cImg[1].getElementsByTagName('img');
				var jiaB =cDiv[0].getElementsByTagName('b')[3];
				
				var iu = Number(Aimg[2].getAttribute('i'));
				
				if(iu == 0){
					jiaB.innerHTML = "2";
				}else if(iu == 1){
					jiaB.innerHTML = "2";
				}else if(iu == 2){
					jiaB.innerHTML = "2";
				}else if(iu == 3){
					jiaB.innerHTML = "2";
				}else{
					alert("点击错误！");
				}
			}
		};

		var cInput2 = cDiv[0].getElementsByTagName('input')[7];

		cInput2.onclick = function(){//选择A为11，默认是1
			var Aimg = cImg[0].getElementsByTagName('img');
			var iu = Number(Aimg[2].getAttribute('i'));
			var tu = Number(Aimg[1].getAttribute('i'));
			var sSpan = cDiv[0].getElementsByTagName('span')[0];
			if(tBt){
				if(iu == 0 || iu == 1 || iu == 2 || iu == 3|| tu == 0 || tu == 1 || iu == 2 || iu == 3){
					sSpan.innerHTML = parseInt(sSpan.innerHTML) + 10;
				}else{
					alert("点击错误！");
				}
			}	
		};

		var yOo = cDiv[0].getElementsByClassName('oo')[0];
		yOo.onmouseover = function(){ //鼠标移入，暗牌隐藏
			yOo.style.display = "none";
		};

		var dImg = cDiv[0].getElementsByTagName('img');
		dImg[1].onmouseout = function(){//鼠标移出，暗牌显示
			yOo.style.display = "block";
		};
		/*yOo.onmouseout = function(){
			yOo.style.display = "block";
		};*/
	};

	oRight.onmouseover = function(){
		gInput = cP2[1].getElementsByTagName('input');

		gInput[0].onclick = function(){ //庄家要牌
			if(bBt == false && tBt == false){
				var zSpan = cDiv[1].getElementsByTagName('span')[0];
				var sSpan = cDiv[0].getElementsByTagName('span')[0];
				var index = Math.floor((Math.random()*aArr.length));
				cImg[1].innerHTML +='<img src='+aArr[index].img+'>';
				zSpan.innerHTML = parseInt(zSpan.innerHTML) + parseInt(aArr[index].num);
				if(Number(zSpan.innerHTML) > 21){
					alert("庄家爆了，玩家赢了！");
					bBt = true;
					tBt = true;
					var cText = cDiv[0]. getElementsByTagName('input')[5];
					var eb = cDiv[0].getElementsByTagName('b')[1];
					var ebq = cDiv[0].getElementsByTagName('b')[2];
					var ep = parseInt(eb.innerHTML);
					
					if(Number(sSpan.innerHTML) == 21){
						cText.value = parseInt(cText.value) + ep*parseInt(ebq.innerHTML)*2;
					}else{
						cText.value = parseInt(cText.value) + ep*parseInt(ebq.innerHTML);
					}
				}
			}else{
				alert("还没有到庄家开始！");
			}	
		};

		gInput[1].onclick = function(){ //比较大小
			var cText = cDiv[0]. getElementsByTagName('input')[5];

			var sSpan = cDiv[0].getElementsByTagName('span')[0];
			var zSpan = cDiv[1].getElementsByTagName('span')[0];
			var oNum = sSpan.innerHTML;
			var pNum = zSpan.innerHTML;

			if( tBt == false ){
				/*if(Number(pNum) == 21){
					var jiaB =cDiv[0].getElementsByTagName('b')[3];
					if(Number(jiaB.innerHTML) == 2){
						var ebq = cDiv[0].getElementsByTagName('b')[2];
						var Aimg = cImg[0].getElementsByTagName('img');
						var ep = parseInt(eb.innerHTML);

						alert("庄家输了，玩家赢了！");
						cText.value = parseInt(cText.value) + ep*parseInt(ebq.innerHTML);
						jiaB.innerHTML = "0";
					}else{
						if(Number(pNum) < Number(pNum)){
							alert("庄家赢了，玩家输了！");
							cText.value = parseInt(cText.value) - ep*parseInt(ebq.innerHTML) - ep*parseInt(ebq.innerHTML)/2;
						}
					}
				}*/
				if(Number(oNum) <= 21 && Number(pNum) <= 21){	
					if(Number(oNum) > Number(pNum)){
						alert("庄家输了，玩家赢了！");
						var eb = cDiv[0].getElementsByTagName('b')[1];
						var ebq = cDiv[0].getElementsByTagName('b')[2];
						var Aimg = cImg[0].getElementsByTagName('img');
						
						var ep = parseInt(eb.innerHTML);
						//alert(oNum);
						//alert(Aimg.length);
						if(oNum == 21 && Aimg.length == 3){
							cText.value = parseInt(cText.value) + ep*parseInt(ebq.innerHTML)*2;
						}else{
							cText.value = parseInt(cText.value) + ep*parseInt(ebq.innerHTML);
						}
						bBt = true;
						tBt = true;			
					}else if(Number(oNum) < Number(pNum)){
						alert("庄家赢了，玩家输了！");
						bBt = true;
						tBt = true;
						
						var eb = cDiv[0].getElementsByTagName('b')[1];
						var ebq = cDiv[0].getElementsByTagName('b')[2];
						
						var ep = parseInt(eb.innerHTML);
						
						cText.value = parseInt(cText.value) - ep*parseInt(ebq.innerHTML);
						if(Number(cText.value) <= 0){
							alert("很遗憾，您输光了！");
							cText.value = 0;
						}
					}else{
						alert('和局！');
						bBt = true;
						tBt = true;
					}
				}
			}else{
				alert("请耐心等待，还没有到庄家！");
				tBt = true;
			}
		};

		var cInput2 = cDiv[1].getElementsByTagName('input')[3];

		cInput2.onclick = function(){
			var Aimg = cImg[1].getElementsByTagName('img');
			var iu = Number(Aimg[2].getAttribute('i'));
			var tu = Number(Aimg[1].getAttribute('i'));
			var sSpan = cDiv[1].getElementsByTagName('span')[0];

			if(iu == 0 || iu == 1 || iu == 2 || iu == 3|| tu == 0 || tu == 1 || iu == 2 || iu == 3){
				sSpan.innerHTML = parseInt(sSpan.innerHTML) + 10;
			}else{
				alert("点击错误！");
			}
		};
		var yOo = cDiv[1].getElementsByClassName('oo')[0];
		yOo.onmouseover = function(){
			yOo.style.display = "none";
		};

		var dImg = cDiv[1].getElementsByTagName('img');
		dImg[1].onmouseout = function(){
			yOo.style.display = "block";
		};
	}

	function addPlayer(num){ //添加玩家
		var aDiv = document.createElement('div');
		var aP = document.createElement('p');
		var iDiv = document.createElement('div');
		var iP = document.createElement('p');
		var aInput = document.createElement('input');
		var iInput = document.createElement('input');
		var rInput = document.createElement('input');
		var bInput = document.createElement('input');

		var jInput = document.createElement('input');

		var wB1 = document.createElement('b');
		var wB2 = document.createElement('b');
		var wB3 = document.createElement('b');

		var wB4 = document.createElement('b');
		var wI3 = document.createElement('i');

		var wI1 = document.createElement('i');
		var wI2 = document.createElement('i');
		var wInt = document.createElement('input');
		var aSpan = document.createElement('span');
		var eHr1 = document.createElement('hr');
		var eHr2 = document.createElement('hr');
		var eBr = document.createElement('br');

		aP.innerHTML = '玩家' + num;
		aDiv.appendChild(aP);
		aP.className = 'p1';
		aDiv.appendChild(iDiv);
		iDiv.className = 'img';

		aInput.type = 'button';
		aInput.value = '在要一张';
		iP.appendChild(aInput);

		iInput.type = 'button';
		iInput.value = '加注';
		iP.appendChild(iInput);

		rInput.type = 'button';
		rInput.value = '不要了';
		iP.appendChild(rInput);

		bInput.type = 'button';
		bInput.value = '退出';
		iP.appendChild(bInput);

		jInput.type = 'button';
		jInput.value = '加注';
		iP.appendChild(jInput);

		aDiv.appendChild(iP);
		iP.className = 'p2';
		

		aDiv.appendChild(eHr1);

		wB1.innerHTML = "当前倍数：";
		aDiv.appendChild(wB1);

		wB2.innerHTML = '2';
		aDiv.appendChild(wB2);

		aDiv.appendChild(eHr2);

		wI1.innerHTML = "输入金额：";
		aDiv.appendChild(wI1);

		wInt.value = "0";
		aDiv.appendChild(wInt);

		aDiv.appendChild(eBr);

		wI2.innerHTML = '底注：';
		aDiv.appendChild(wI2);

		wB3.innerHTML = '4 ，';
		aDiv.appendChild(wB3);

		wI3.innerHTML = '保险：';
		aDiv.appendChild(wI3);

		wB4.innerHTML = '0';
		aDiv.appendChild(wB3);

		oLeft.appendChild(aDiv);
		aDiv.className = 'div1';

		aSpan.innerHTML = '0';
		aDiv.appendChild(aSpan);

		var wI4 = document.createElement('i');
		wI4.innerHTML = '决定：';
		aDiv.appendChild(wI4);

		var DInput1 = document.createElement('input');
		DInput1.value = '1';
		DInput1.type = 'button';
		var DInput2 = document.createElement('input');
		DInput2.value = '11';
		DInput2.type = 'button';

		aDiv.appendChild(DInput1);
		aDiv.appendChild(DInput2);
	}

	oBegin.onclick = function(){ //开始游戏
		//alert(typeof oLeft.innerHTML); string
		//alert(aArr[51].num);
		if(oLeft.innerHTML == 0){
			alert("请添加玩家！！");
		}else{
			//var bBt = true;
			//alert(oLeft.innerHTML);
			if(bBt){
				var index = Math.floor((Math.random()*aArr.length));
				var index1 = Math.floor((Math.random()*aArr.length));

				//var index_ = 1;
				//var index1 = 50;

				var index_ = Math.floor((Math.random()*aArr.length));
				var index1_ = Math.floor((Math.random()*aArr.length));
				var sSpan = cDiv[0].getElementsByTagName('span')[0];
				var zSpan = cDiv[1].getElementsByTagName('span')[0];
				//alert(sSpan[0].innerHTML);	
				cImg[0].innerHTML = "";
				cImg[1].innerHTML = "";
				
				var oImg1 = document.createElement('img');
				oImg1.className = 'oo';
				oImg1.src='img/0.gif';
				cImg[0].appendChild(oImg1);

				cImg[0].innerHTML +='<img src='+aArr[index].img+" i="+index+'>';
				cImg[0].innerHTML +='<img src='+aArr[index1].img+" i="+index1+'>';

				var oImg2 = document.createElement('img');
				oImg2.className = 'oo';
				oImg2.src='img/0.gif';
				cImg[1].appendChild(oImg2);

				//var nNum = aArr[index].num;
				sSpan.innerHTML = "0";
				zSpan.innerHTML = "0";
				sSpan.innerHTML = parseInt(sSpan.innerHTML) + parseInt(aArr[index].num) + parseInt(aArr[index1].num);

				//alert(aArr[index].num); //1
				//alert(aArr[index1].num); //10
				if(aArr[index].num ==1 && aArr[index1].num == 10){ //判断是不是黑杰克
					sSpan.innerHTML = "21";
				}else if(aArr[index].num ==10 && aArr[index1].num == 1){
					sSpan.innerHTML = "21";
				}
				cImg[1].innerHTML +='<img src='+aArr[index_].img+" i="+index_+'>';
				cImg[1].innerHTML +='<img src='+aArr[index1_].img+" i="+index1_+'>';
				zSpan.innerHTML = parseInt(zSpan.innerHTML) + parseInt(aArr[index_].num) + parseInt(aArr[index1_].num);
				bBt = false;

				aArr.splice(index,1);
				aArr.splice(index1,1);
				aArr.splice(index_,1);
				aArr.splice(index1_,1);
				
			}else{
				alert('亲，点击错了！');
			}	 
		}
	};
};