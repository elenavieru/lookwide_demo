/* Fonts */
@font-face {
	font-family: 'andy_regular';
	src: url(fonts/AndyStd-Regular.otf) format("opentype");
}

@font-face {
	font-family: 'andy_bold';
	src: url(fonts/AndyStd-Bold.otf) format("opentype");
}

@font-face {
	font-family: 'andy_italic';
	src: url(fonts/AndyStd-Italic.otf) format("opentype");
}

@font-face {
	font-family: 'andy_bold_italic';
	src: url(fonts/AndyStd-BoldItalic.otf) format("opentype");
}

/* General Styles */

body,
.texto_curso,
#actividad .pregunta .texto_curso {
	font-size: 1.8rem;
}

#swipeview-slider > div > .item {
	overflow-x: hidden;
}

#actividad .carousel-inner .item-container {
	position: relative;
	overflow: hidden;
	background-image: url('');
	padding: 0 0 90px;
}

#actividad .carousel-inner .fondo .item-container {
	background: #F5F8D5;
}

#actividad .content .header {
    border-top: 0;
    border-bottom: none;
    border: 0;
    background: #3FC0F0;
    text-align: right;
    margin-left: 0px;
    width: 100%;
    margin-top: 15px;
    padding: 15px;
}

#actividad .content .slide-concatenate .header {
	border-top: none;
}

#actividad .content .header.empty {
    opacity:0;
}

#actividad .content .ultima .header {
	border-top: 40px solid #D2DE24;
	border-bottom: none;
	background: #D2DE24;
}

#actividad .content .header .title {
	background: transparent;
	padding-left: 40px;
}

#actividad .content .header .slide_number {
	position: relative;
	top: -5px;
	display: inline-block;
	float: left;
	width: 60px;
	height: 60px;
	overflow: hidden;
	margin-right: 10px;
	-webkit-box-shadow: -1px 1px #E7E7E8,
				-2px 2px #E7E7E8,
				-3px 3px #E7E7E8,
				-4px 4px #E7E7E8,
				-5px 5px #E7E7E8,
				-6px 6px #E7E7E8,
				-7px 7px #E7E7E8,
				-8px 8px #E7E7E8,
				-9px 9px #E7E7E8,
				-10px 10px #E7E7E8,
				-11px 11px #E7E7E8,
				-12px 12px #E7E7E8,
				-13px 13px #E7E7E8,
				-14px 14px #E7E7E8,
				-15px 15px #E7E7E8,
				-16px 16px #E7E7E8,
				-17px 17px #E7E7E8,
				-18px 18px #E7E7E8,
				-19px 19px #E7E7E8,
				-20px 20px #E7E7E8,
				-21px 21px #E7E7E8,
				-22px 22px #E7E7E8,
				-23px 23px #E7E7E8,
				-24px 24px #E7E7E8,
				-25px 25px #E7E7E8,
				-26px 26px #E7E7E8,
				-27px 27px #E7E7E8,
				-28px 28px #E7E7E8,
				-29px 29px #E7E7E8,
				-30px 30px #E7E7E8,
				-31px 31px #E7E7E8,
				-32px 32px #E7E7E8,
				-33px 33px #E7E7E8,
				-34px 34px #E7E7E8,
				-35px 35px #E7E7E8,
				-36px 36px #E7E7E8,
				-37px 37px #E7E7E8,
				-38px 38px #E7E7E8,
				-39px 39px #E7E7E8,
				-40px 40px #E7E7E8,
				-41px 41px #E7E7E8,
				-42px 42px #E7E7E8,
				-43px 43px #E7E7E8,
				-44px 44px #E7E7E8,
				-45px 45px #E7E7E8,
				-46px 46px #E7E7E8,
				-47px 47px #E7E7E8,
				-48px 48px #E7E7E8,
				-49px 49px #E7E7E8,
				-50px 50px #E7E7E8,
				-51px 51px #E7E7E8,
				-52px 52px #E7E7E8,
				-53px 53px #E7E7E8,
				-54px 54px #E7E7E8,
				-55px 55px #E7E7E8,
				-56px 56px #E7E7E8,
				-57px 57px #E7E7E8,
				-58px 58px #E7E7E8,
				-59px 59px #E7E7E8,
				-60px 60px #E7E7E8,
				-61px 61px #E7E7E8,
				-62px 62px #E7E7E8,
				-63px 63px #E7E7E8,
				-64px 64px #E7E7E8,
				-65px 65px #E7E7E8,
				-66px 66px #E7E7E8,
				-67px 67px #E7E7E8,
				-68px 68px #E7E7E8,
				-69px 69px #E7E7E8,
				-70px 70px #E7E7E8,
				-71px 71px #E7E7E8,
				-72px 72px #E7E7E8,
				-73px 73px #E7E7E8,
				-74px 74px #E7E7E8,
				-75px 75px #E7E7E8,
				-76px 76px #E7E7E8,
				-77px 77px #E7E7E8,
				-78px 78px #E7E7E8,
				-79px 79px #E7E7E8,
				-80px 80px #E7E7E8;
	   -moz-box-shadow: -1px 1px #E7E7E8,
				-2px 2px #E7E7E8,
				-3px 3px #E7E7E8,
				-4px 4px #E7E7E8,
				-5px 5px #E7E7E8,
				-6px 6px #E7E7E8,
				-7px 7px #E7E7E8,
				-8px 8px #E7E7E8,
				-9px 9px #E7E7E8,
				-10px 10px #E7E7E8,
				-11px 11px #E7E7E8,
				-12px 12px #E7E7E8,
				-13px 13px #E7E7E8,
				-14px 14px #E7E7E8,
				-15px 15px #E7E7E8,
				-16px 16px #E7E7E8,
				-17px 17px #E7E7E8,
				-18px 18px #E7E7E8,
				-19px 19px #E7E7E8,
				-20px 20px #E7E7E8,
				-21px 21px #E7E7E8,
				-22px 22px #E7E7E8,
				-23px 23px #E7E7E8,
				-24px 24px #E7E7E8,
				-25px 25px #E7E7E8,
				-26px 26px #E7E7E8,
				-27px 27px #E7E7E8,
				-28px 28px #E7E7E8,
				-29px 29px #E7E7E8,
				-30px 30px #E7E7E8,
				-31px 31px #E7E7E8,
				-32px 32px #E7E7E8,
				-33px 33px #E7E7E8,
				-34px 34px #E7E7E8,
				-35px 35px #E7E7E8,
				-36px 36px #E7E7E8,
				-37px 37px #E7E7E8,
				-38px 38px #E7E7E8,
				-39px 39px #E7E7E8,
				-40px 40px #E7E7E8,
				-41px 41px #E7E7E8,
				-42px 42px #E7E7E8,
				-43px 43px #E7E7E8,
				-44px 44px #E7E7E8,
				-45px 45px #E7E7E8,
				-46px 46px #E7E7E8,
				-47px 47px #E7E7E8,
				-48px 48px #E7E7E8,
				-49px 49px #E7E7E8,
				-50px 50px #E7E7E8,
				-51px 51px #E7E7E8,
				-52px 52px #E7E7E8,
				-53px 53px #E7E7E8,
				-54px 54px #E7E7E8,
				-55px 55px #E7E7E8,
				-56px 56px #E7E7E8,
				-57px 57px #E7E7E8,
				-58px 58px #E7E7E8,
				-59px 59px #E7E7E8,
				-60px 60px #E7E7E8,
				-61px 61px #E7E7E8,
				-62px 62px #E7E7E8,
				-63px 63px #E7E7E8,
				-64px 64px #E7E7E8,
				-65px 65px #E7E7E8,
				-66px 66px #E7E7E8,
				-67px 67px #E7E7E8,
				-68px 68px #E7E7E8,
				-69px 69px #E7E7E8,
				-70px 70px #E7E7E8,
				-71px 71px #E7E7E8,
				-72px 72px #E7E7E8,
				-73px 73px #E7E7E8,
				-74px 74px #E7E7E8,
				-75px 75px #E7E7E8,
				-76px 76px #E7E7E8,
				-77px 77px #E7E7E8,
				-78px 78px #E7E7E8,
				-79px 79px #E7E7E8,
				-80px 80px #E7E7E8;
	        box-shadow: -1px 1px #E7E7E8,
				-2px 2px #E7E7E8,
				-3px 3px #E7E7E8,
				-4px 4px #E7E7E8,
				-5px 5px #E7E7E8,
				-6px 6px #E7E7E8,
				-7px 7px #E7E7E8,
				-8px 8px #E7E7E8,
				-9px 9px #E7E7E8,
				-10px 10px #E7E7E8,
				-11px 11px #E7E7E8,
				-12px 12px #E7E7E8,
				-13px 13px #E7E7E8,
				-14px 14px #E7E7E8,
				-15px 15px #E7E7E8,
				-16px 16px #E7E7E8,
				-17px 17px #E7E7E8,
				-18px 18px #E7E7E8,
				-19px 19px #E7E7E8,
				-20px 20px #E7E7E8,
				-21px 21px #E7E7E8,
				-22px 22px #E7E7E8,
				-23px 23px #E7E7E8,
				-24px 24px #E7E7E8,
				-25px 25px #E7E7E8,
				-26px 26px #E7E7E8,
				-27px 27px #E7E7E8,
				-28px 28px #E7E7E8,
				-29px 29px #E7E7E8,
				-30px 30px #E7E7E8,
				-31px 31px #E7E7E8,
				-32px 32px #E7E7E8,
				-33px 33px #E7E7E8,
				-34px 34px #E7E7E8,
				-35px 35px #E7E7E8,
				-36px 36px #E7E7E8,
				-37px 37px #E7E7E8,
				-38px 38px #E7E7E8,
				-39px 39px #E7E7E8,
				-40px 40px #E7E7E8,
				-41px 41px #E7E7E8,
				-42px 42px #E7E7E8,
				-43px 43px #E7E7E8,
				-44px 44px #E7E7E8,
				-45px 45px #E7E7E8,
				-46px 46px #E7E7E8,
				-47px 47px #E7E7E8,
				-48px 48px #E7E7E8,
				-49px 49px #E7E7E8,
				-50px 50px #E7E7E8,
				-51px 51px #E7E7E8,
				-52px 52px #E7E7E8,
				-53px 53px #E7E7E8,
				-54px 54px #E7E7E8,
				-55px 55px #E7E7E8,
				-56px 56px #E7E7E8,
				-57px 57px #E7E7E8,
				-58px 58px #E7E7E8,
				-59px 59px #E7E7E8,
				-60px 60px #E7E7E8,
				-61px 61px #E7E7E8,
				-62px 62px #E7E7E8,
				-63px 63px #E7E7E8,
				-64px 64px #E7E7E8,
				-65px 65px #E7E7E8,
				-66px 66px #E7E7E8,
				-67px 67px #E7E7E8,
				-68px 68px #E7E7E8,
				-69px 69px #E7E7E8,
				-70px 70px #E7E7E8,
				-71px 71px #E7E7E8,
				-72px 72px #E7E7E8,
				-73px 73px #E7E7E8,
				-74px 74px #E7E7E8,
				-75px 75px #E7E7E8,
				-76px 76px #E7E7E8,
				-77px 77px #E7E7E8,
				-78px 78px #E7E7E8,
				-79px 79px #E7E7E8,
				-80px 80px #E7E7E8;
	-webkit-border-radius: 50%;
	   -moz-border-radius: 50%;
	        border-radius: 50%;
	background: #A23D97;
	color: #fff;
	font-size: 4.0rem;
	font-weight: bold;
	line-height: 6.0rem;
	text-align: center;
	text-shadow: -1px 1px #812B78,
				 -2px 2px #812B78,
				 -3px 3px #812B78,
				 -4px 4px #812B78,
				 -5px 5px #812B78,
				 -6px 6px #812B78,
				 -7px 7px #812B78,
				 -8px 8px #812B78,
				 -9px 9px #812B78,
				 -10px 10px #812B78,
				 -11px 11px #812B78,
				 -12px 12px #812B78,
				 -13px 13px #812B78,
				 -14px 14px #812B78,
				 -15px 15px #812B78,
				 -16px 16px #812B78,
				 -17px 17px #812B78,
				 -18px 18px #812B78,
				 -19px 19px #812B78,
				 -20px 20px #812B78,
				 -21px 21px #812B78,
				 -22px 22px #812B78,
				 -23px 23px #812B78,
				 -24px 24px #812B78,
				 -25px 25px #812B78,
				 -26px 26px #812B78,
				 -27px 27px #812B78,
				 -28px 28px #812B78,
				 -29px 29px #812B78,
				 -30px 30px #812B78,
				 -31px 31px #812B78,
				 -32px 32px #812B78,
				 -33px 33px #812B78,
				 -34px 34px #812B78,
				 -35px 35px #812B78,
				 -36px 36px #812B78,
				 -37px 37px #812B78,
				 -38px 38px #812B78,
				 -39px 39px #812B78,
				 -40px 40px #812B78;
}

#actividad .content .ultima .header .slide_number {
	position: absolute;
	top: -95px;
	right: -25px;
	-webkit-box-shadow: 1px 1px #BAC824,
				2px 2px #BAC824,
				3px 3px #BAC824,
				4px 4px #BAC824,
				5px 5px #BAC824,
				6px 6px #BAC824,
				7px 7px #BAC824,
				8px 8px #BAC824,
				9px 9px #BAC824,
				10px 10px #BAC824,
				11px 11px #BAC824,
				12px 12px #BAC824,
				13px 13px #BAC824,
				14px 14px #BAC824,
				15px 15px #BAC824,
				16px 16px #BAC824,
				17px 17px #BAC824,
				18px 18px #BAC824,
				19px 19px #BAC824,
				20px 20px #BAC824,
				21px 21px #BAC824,
				22px 22px #BAC824,
				23px 23px #BAC824,
				24px 24px #BAC824,
				25px 25px #BAC824,
				26px 26px #BAC824,
				27px 27px #BAC824,
				28px 28px #BAC824,
				29px 29px #BAC824,
				30px 30px #BAC824,
				31px 31px #BAC824,
				32px 32px #BAC824,
				33px 33px #BAC824,
				34px 34px #BAC824,
				35px 35px #BAC824,
				36px 36px #BAC824,
				37px 37px #BAC824,
				38px 38px #BAC824,
				39px 39px #BAC824,
				40px 40px #BAC824,
				41px 41px #BAC824,
				42px 42px #BAC824,
				43px 43px #BAC824,
				44px 44px #BAC824,
				45px 45px #BAC824,
				46px 46px #BAC824,
				47px 47px #BAC824,
				48px 48px #BAC824,
				49px 49px #BAC824,
				50px 50px #BAC824,
				51px 51px #BAC824,
				52px 52px #BAC824,
				53px 53px #BAC824,
				54px 54px #BAC824,
				55px 55px #BAC824,
				56px 56px #BAC824,
				57px 57px #BAC824,
				58px 58px #BAC824,
				59px 59px #BAC824,
				60px 60px #BAC824,
				61px 61px #BAC824,
				62px 62px #BAC824,
				63px 63px #BAC824,
				64px 64px #BAC824,
				65px 65px #BAC824,
				66px 66px #BAC824,
				67px 67px #BAC824,
				68px 68px #BAC824,
				69px 69px #BAC824,
				70px 70px #BAC824;
	   -moz-box-shadow: 1px 1px #BAC824,
				2px 2px #BAC824,
				3px 3px #BAC824,
				4px 4px #BAC824,
				5px 5px #BAC824,
				6px 6px #BAC824,
				7px 7px #BAC824,
				8px 8px #BAC824,
				9px 9px #BAC824,
				10px 10px #BAC824,
				11px 11px #BAC824,
				12px 12px #BAC824,
				13px 13px #BAC824,
				14px 14px #BAC824,
				15px 15px #BAC824,
				16px 16px #BAC824,
				17px 17px #BAC824,
				18px 18px #BAC824,
				19px 19px #BAC824,
				20px 20px #BAC824,
				21px 21px #BAC824,
				22px 22px #BAC824,
				23px 23px #BAC824,
				24px 24px #BAC824,
				25px 25px #BAC824,
				26px 26px #BAC824,
				27px 27px #BAC824,
				28px 28px #BAC824,
				29px 29px #BAC824,
				30px 30px #BAC824,
				31px 31px #BAC824,
				32px 32px #BAC824,
				33px 33px #BAC824,
				34px 34px #BAC824,
				35px 35px #BAC824,
				36px 36px #BAC824,
				37px 37px #BAC824,
				38px 38px #BAC824,
				39px 39px #BAC824,
				40px 40px #BAC824,
				41px 41px #BAC824,
				42px 42px #BAC824,
				43px 43px #BAC824,
				44px 44px #BAC824,
				45px 45px #BAC824,
				46px 46px #BAC824,
				47px 47px #BAC824,
				48px 48px #BAC824,
				49px 49px #BAC824,
				50px 50px #BAC824,
				51px 51px #BAC824,
				52px 52px #BAC824,
				53px 53px #BAC824,
				54px 54px #BAC824,
				55px 55px #BAC824,
				56px 56px #BAC824,
				57px 57px #BAC824,
				58px 58px #BAC824,
				59px 59px #BAC824,
				60px 60px #BAC824,
				61px 61px #BAC824,
				62px 62px #BAC824,
				63px 63px #BAC824,
				64px 64px #BAC824,
				65px 65px #BAC824,
				66px 66px #BAC824,
				67px 67px #BAC824,
				68px 68px #BAC824,
				69px 69px #BAC824,
				70px 70px #BAC824;
	        box-shadow: 1px 1px #BAC824,
				2px 2px #BAC824,
				3px 3px #BAC824,
				4px 4px #BAC824,
				5px 5px #BAC824,
				6px 6px #BAC824,
				7px 7px #BAC824,
				8px 8px #BAC824,
				9px 9px #BAC824,
				10px 10px #BAC824,
				11px 11px #BAC824,
				12px 12px #BAC824,
				13px 13px #BAC824,
				14px 14px #BAC824,
				15px 15px #BAC824,
				16px 16px #BAC824,
				17px 17px #BAC824,
				18px 18px #BAC824,
				19px 19px #BAC824,
				20px 20px #BAC824,
				21px 21px #BAC824,
				22px 22px #BAC824,
				23px 23px #BAC824,
				24px 24px #BAC824,
				25px 25px #BAC824,
				26px 26px #BAC824,
				27px 27px #BAC824,
				28px 28px #BAC824,
				29px 29px #BAC824,
				30px 30px #BAC824,
				31px 31px #BAC824,
				32px 32px #BAC824,
				33px 33px #BAC824,
				34px 34px #BAC824,
				35px 35px #BAC824,
				36px 36px #BAC824,
				37px 37px #BAC824,
				38px 38px #BAC824,
				39px 39px #BAC824,
				40px 40px #BAC824,
				41px 41px #BAC824,
				42px 42px #BAC824,
				43px 43px #BAC824,
				44px 44px #BAC824,
				45px 45px #BAC824,
				46px 46px #BAC824,
				47px 47px #BAC824,
				48px 48px #BAC824,
				49px 49px #BAC824,
				50px 50px #BAC824,
				51px 51px #BAC824,
				52px 52px #BAC824,
				53px 53px #BAC824,
				54px 54px #BAC824,
				55px 55px #BAC824,
				56px 56px #BAC824,
				57px 57px #BAC824,
				58px 58px #BAC824,
				59px 59px #BAC824,
				60px 60px #BAC824,
				61px 61px #BAC824,
				62px 62px #BAC824,
				63px 63px #BAC824,
				64px 64px #BAC824,
				65px 65px #BAC824,
				66px 66px #BAC824,
				67px 67px #BAC824,
				68px 68px #BAC824,
				69px 69px #BAC824,
				70px 70px #BAC824;
	text-shadow: 1px 1px #812B78,
				 2px 2px #812B78,
				 3px 3px #812B78,
				 4px 4px #812B78,
				 5px 5px #812B78,
				 6px 6px #812B78,
				 7px 7px #812B78,
				 8px 8px #812B78,
				 9px 9px #812B78,
				 10px 10px #812B78,
				 11px 11px #812B78,
				 12px 12px #812B78,
				 13px 13px #812B78,
				 14px 14px #812B78,
				 15px 15px #812B78,
				 16px 16px #812B78,
				 17px 17px #812B78,
				 18px 18px #812B78,
				 19px 19px #812B78,
				 20px 20px #812B78,
				 21px 21px #812B78,
				 22px 22px #812B78,
				 23px 23px #812B78,
				 24px 24px #812B78,
				 25px 25px #812B78,
				 26px 26px #812B78,
				 27px 27px #812B78,
				 28px 28px #812B78,
				 29px 29px #812B78,
				 30px 30px #812B78,
				 31px 31px #812B78,
				 32px 32px #812B78,
				 33px 33px #812B78,
				 34px 34px #812B78,
				 35px 35px #812B78,
				 36px 36px #812B78,
				 37px 37px #812B78,
				 38px 38px #812B78,
				 39px 39px #812B78,
				 40px 40px #812B78;
}

#actividad .content .header .empty .slide_number {
    background: transparent;
}

#actividad .content .header .title img,
#actividad .content .header .chapter {
	display: none;
}

#actividad .content .header .title h3 {
    margin: 0px;
    color: #fff;
    font-size: 4rem;
    font-weight: 600;
    line-height: 6rem;
    padding-right: 55px;
}

#actividad .content .ultima .header .title h3 {
	position: relative;
	display: block;
	height: 37px;
	margin: 90px 50px 0;
	-webkit-border-radius: 20px 20px 0 0;
	   -moz-border-radius: 20px 20px 0 0;
	        border-radius: 20px 20px 0 0;
	background: #fff;
	padding: 5px 5px 5px 230px;
	line-height: 2.7rem;
}

#actividad .content .ultima.fondo .header .title h3 {
	background: #F5F8D5;
}

.shadow-title {
	position: absolute;
	top: -10px;
	left: -7px;
	display: inline-block;
	-webkit-box-shadow: -1px -1px #BAC824,
				-2px -2px #BAC824,
				-3px -3px #BAC824,
				-4px -4px #BAC824,
				-5px -5px #BAC824,
				-6px -6px #BAC824,
				-7px -7px #BAC824,
				-8px -8px #BAC824,
				-9px -9px #BAC824,
				-10px -10px #BAC824,
				-11px -11px #BAC824,
				-12px -12px #BAC824,
				-13px -13px #BAC824,
				-14px -14px #BAC824,
				-15px -15px #BAC824,
				-16px -16px #BAC824,
				-17px -17px #BAC824,
				-18px -18px #BAC824,
				-19px -19px #BAC824,
				-20px -20px #BAC824,
				-21px -21px #BAC824,
				-22px -22px #BAC824,
				-23px -23px #BAC824,
				-24px -24px #BAC824,
				-25px -25px #BAC824,
				-26px -26px #BAC824,
				-27px -27px #BAC824,
				-28px -28px #BAC824,
				-29px -29px #BAC824,
				-30px -30px #BAC824,
				-31px -31px #BAC824,
				-32px -32px #BAC824,
				-33px -33px #BAC824,
				-34px -34px #BAC824,
				-35px -35px #BAC824,
				-36px -36px #BAC824,
				-37px -37px #BAC824,
				-38px -38px #BAC824,
				-39px -39px #BAC824,
				-40px -40px #BAC824,
				-41px -41px #BAC824,
				-42px -42px #BAC824,
				-43px -43px #BAC824,
				-44px -44px #BAC824,
				-45px -45px #BAC824,
				-46px -46px #BAC824,
				-47px -47px #BAC824,
				-48px -48px #BAC824,
				-49px -49px #BAC824,
				-50px -50px #BAC824,
				-51px -51px #BAC824,
				-52px -52px #BAC824,
				-53px -53px #BAC824,
				-54px -54px #BAC824,
				-55px -55px #BAC824,
				-56px -56px #BAC824,
				-57px -57px #BAC824,
				-58px -58px #BAC824,
				-59px -59px #BAC824,
				-60px -60px #BAC824,
				-61px -61px #BAC824,
				-62px -62px #BAC824,
				-63px -63px #BAC824,
				-64px -64px #BAC824,
				-65px -65px #BAC824,
				-66px -66px #BAC824,
				-67px -67px #BAC824,
				-68px -68px #BAC824,
				-69px -69px #BAC824,
				-70px -70px #BAC824,
				-81px -81px #BAC824,
				-82px -82px #BAC824,
				-83px -83px #BAC824,
				-84px -84px #BAC824,
				-85px -85px #BAC824,
				-86px -86px #BAC824,
				-87px -87px #BAC824,
				-88px -88px #BAC824,
				-89px -89px #BAC824,
				-90px -90px #BAC824,
				-91px -91px #BAC824,
				-92px -92px #BAC824,
				-93px -93px #BAC824,
				-94px -94px #BAC824,
				-95px -95px #BAC824,
				-96px -96px #BAC824,
				-97px -97px #BAC824,
				-98px -98px #BAC824,
				-99px -99px #BAC824,
				-100px -100px #BAC824,
				-101px -101px #BAC824,
				-102px -102px #BAC824,
				-103px -103px #BAC824,
				-104px -104px #BAC824,
				-105px -105px #BAC824,
				-106px -106px #BAC824,
				-107px -107px #BAC824,
				-108px -108px #BAC824,
				-109px -109px #BAC824,
				-110px -110px #BAC824,
				-111px -111px #BAC824,
				-112px -112px #BAC824,
				-113px -113px #BAC824,
				-114px -114px #BAC824,
				-115px -115px #BAC824,
				-116px -116px #BAC824,
				-117px -117px #BAC824,
				-118px -118px #BAC824,
				-119px -119px #BAC824,
				-120px -120px #BAC824;
	   -moz-box-shadow: -1px -1px #BAC824,
				-2px -2px #BAC824,
				-3px -3px #BAC824,
				-4px -4px #BAC824,
				-5px -5px #BAC824,
				-6px -6px #BAC824,
				-7px -7px #BAC824,
				-8px -8px #BAC824,
				-9px -9px #BAC824,
				-10px -10px #BAC824,
				-11px -11px #BAC824,
				-12px -12px #BAC824,
				-13px -13px #BAC824,
				-14px -14px #BAC824,
				-15px -15px #BAC824,
				-16px -16px #BAC824,
				-17px -17px #BAC824,
				-18px -18px #BAC824,
				-19px -19px #BAC824,
				-20px -20px #BAC824,
				-21px -21px #BAC824,
				-22px -22px #BAC824,
				-23px -23px #BAC824,
				-24px -24px #BAC824,
				-25px -25px #BAC824,
				-26px -26px #BAC824,
				-27px -27px #BAC824,
				-28px -28px #BAC824,
				-29px -29px #BAC824,
				-30px -30px #BAC824,
				-31px -31px #BAC824,
				-32px -32px #BAC824,
				-33px -33px #BAC824,
				-34px -34px #BAC824,
				-35px -35px #BAC824,
				-36px -36px #BAC824,
				-37px -37px #BAC824,
				-38px -38px #BAC824,
				-39px -39px #BAC824,
				-40px -40px #BAC824,
				-41px -41px #BAC824,
				-42px -42px #BAC824,
				-43px -43px #BAC824,
				-44px -44px #BAC824,
				-45px -45px #BAC824,
				-46px -46px #BAC824,
				-47px -47px #BAC824,
				-48px -48px #BAC824,
				-49px -49px #BAC824,
				-50px -50px #BAC824,
				-51px -51px #BAC824,
				-52px -52px #BAC824,
				-53px -53px #BAC824,
				-54px -54px #BAC824,
				-55px -55px #BAC824,
				-56px -56px #BAC824,
				-57px -57px #BAC824,
				-58px -58px #BAC824,
				-59px -59px #BAC824,
				-60px -60px #BAC824,
				-61px -61px #BAC824,
				-62px -62px #BAC824,
				-63px -63px #BAC824,
				-64px -64px #BAC824,
				-65px -65px #BAC824,
				-66px -66px #BAC824,
				-67px -67px #BAC824,
				-68px -68px #BAC824,
				-69px -69px #BAC824,
				-70px -70px #BAC824,
				-81px -81px #BAC824,
				-82px -82px #BAC824,
				-83px -83px #BAC824,
				-84px -84px #BAC824,
				-85px -85px #BAC824,
				-86px -86px #BAC824,
				-87px -87px #BAC824,
				-88px -88px #BAC824,
				-89px -89px #BAC824,
				-90px -90px #BAC824,
				-91px -91px #BAC824,
				-92px -92px #BAC824,
				-93px -93px #BAC824,
				-94px -94px #BAC824,
				-95px -95px #BAC824,
				-96px -96px #BAC824,
				-97px -97px #BAC824,
				-98px -98px #BAC824,
				-99px -99px #BAC824,
				-100px -100px #BAC824,
				-101px -101px #BAC824,
				-102px -102px #BAC824,
				-103px -103px #BAC824,
				-104px -104px #BAC824,
				-105px -105px #BAC824,
				-106px -106px #BAC824,
				-107px -107px #BAC824,
				-108px -108px #BAC824,
				-109px -109px #BAC824,
				-110px -110px #BAC824,
				-111px -111px #BAC824,
				-112px -112px #BAC824,
				-113px -113px #BAC824,
				-114px -114px #BAC824,
				-115px -115px #BAC824,
				-116px -116px #BAC824,
				-117px -117px #BAC824,
				-118px -118px #BAC824,
				-119px -119px #BAC824,
				-120px -120px #BAC824;
	        box-shadow: -1px -1px #BAC824,
				-2px -2px #BAC824,
				-3px -3px #BAC824,
				-4px -4px #BAC824,
				-5px -5px #BAC824,
				-6px -6px #BAC824,
				-7px -7px #BAC824,
				-8px -8px #BAC824,
				-9px -9px #BAC824,
				-10px -10px #BAC824,
				-11px -11px #BAC824,
				-12px -12px #BAC824,
				-13px -13px #BAC824,
				-14px -14px #BAC824,
				-15px -15px #BAC824,
				-16px -16px #BAC824,
				-17px -17px #BAC824,
				-18px -18px #BAC824,
				-19px -19px #BAC824,
				-20px -20px #BAC824,
				-21px -21px #BAC824,
				-22px -22px #BAC824,
				-23px -23px #BAC824,
				-24px -24px #BAC824,
				-25px -25px #BAC824,
				-26px -26px #BAC824,
				-27px -27px #BAC824,
				-28px -28px #BAC824,
				-29px -29px #BAC824,
				-30px -30px #BAC824,
				-31px -31px #BAC824,
				-32px -32px #BAC824,
				-33px -33px #BAC824,
				-34px -34px #BAC824,
				-35px -35px #BAC824,
				-36px -36px #BAC824,
				-37px -37px #BAC824,
				-38px -38px #BAC824,
				-39px -39px #BAC824,
				-40px -40px #BAC824,
				-41px -41px #BAC824,
				-42px -42px #BAC824,
				-43px -43px #BAC824,
				-44px -44px #BAC824,
				-45px -45px #BAC824,
				-46px -46px #BAC824,
				-47px -47px #BAC824,
				-48px -48px #BAC824,
				-49px -49px #BAC824,
				-50px -50px #BAC824,
				-51px -51px #BAC824,
				-52px -52px #BAC824,
				-53px -53px #BAC824,
				-54px -54px #BAC824,
				-55px -55px #BAC824,
				-56px -56px #BAC824,
				-57px -57px #BAC824,
				-58px -58px #BAC824,
				-59px -59px #BAC824,
				-60px -60px #BAC824,
				-61px -61px #BAC824,
				-62px -62px #BAC824,
				-63px -63px #BAC824,
				-64px -64px #BAC824,
				-65px -65px #BAC824,
				-66px -66px #BAC824,
				-67px -67px #BAC824,
				-68px -68px #BAC824,
				-69px -69px #BAC824,
				-70px -70px #BAC824,
				-81px -81px #BAC824,
				-82px -82px #BAC824,
				-83px -83px #BAC824,
				-84px -84px #BAC824,
				-85px -85px #BAC824,
				-86px -86px #BAC824,
				-87px -87px #BAC824,
				-88px -88px #BAC824,
				-89px -89px #BAC824,
				-90px -90px #BAC824,
				-91px -91px #BAC824,
				-92px -92px #BAC824,
				-93px -93px #BAC824,
				-94px -94px #BAC824,
				-95px -95px #BAC824,
				-96px -96px #BAC824,
				-97px -97px #BAC824,
				-98px -98px #BAC824,
				-99px -99px #BAC824,
				-100px -100px #BAC824,
				-101px -101px #BAC824,
				-102px -102px #BAC824,
				-103px -103px #BAC824,
				-104px -104px #BAC824,
				-105px -105px #BAC824,
				-106px -106px #BAC824,
				-107px -107px #BAC824,
				-108px -108px #BAC824,
				-109px -109px #BAC824,
				-110px -110px #BAC824,
				-111px -111px #BAC824,
				-112px -112px #BAC824,
				-113px -113px #BAC824,
				-114px -114px #BAC824,
				-115px -115px #BAC824,
				-116px -116px #BAC824,
				-117px -117px #BAC824,
				-118px -118px #BAC824,
				-119px -119px #BAC824,
				-120px -120px #BAC824;
	-webkit-border-radius: 0 15px 15px 15px;
	   -moz-border-radius: 0 15px 15px 15px;
	        border-radius: 0 15px 15px 15px;
	background: #D2DE24;
	padding: 12px;
	color: #000;
}

.shadow-pico {
	position: absolute;
	top: -40px;
	left: 0;
	display: inline-block;
	width: 40px;
	height: 40px;
	background: -webkit-linear-gradient(225deg, transparent 40px, #D2DE24 0) top left;
	background: -moz-linear-gradient(225deg, transparent 40px, #D2DE24 0) top left;
	background: -o-linear-gradient(225deg, transparent 40px, #D2DE24 0) top left;
	background: linear-gradient(225deg, transparent 40px, #D2DE24 0) top left;
	-webkit-background-size: 100% 100%;
	   -moz-background-size: 100% 100%;
	     -o-background-size: 100% 100%;
	        background-size: 100% 100%;
	background-repeat: no-repeat;
	background-image: -webkit-radial-gradient(100% 0 circle, rgba(204,0,0,0) 39px, #D2DE24 1px);
	background-image: -moz-radial-gradient(100% 0 circle, rgba(204,0,0,0) 39px, #D2DE24 1px);
	background-image: -o-radial-gradient(100% 0 circle, rgba(204,0,0,0) 39px, #D2DE24 1px);
	background-image: radial-gradient(circle at 100% 0, rgba(204,0,0,0) 39px, #D2DE24 1px);
}

.body_clase.edit #actividad .item .header .title input {
	position: relative;
	float: left;
	clear: right;
	width: 75%;
	margin-top: 10px;
	margin-left: 10px;
}

.slide_main,
.cke_inner {
	padding: 0 70px !important;
}

.final .slide_main,
.cke_inner {
	margin-top: -20px;
    border-top: 0px;
    border: 50px solid #FFC20E;
}

.bck-title1 {
    color: #fff;
    font-weight: 600;
    background: #F1872E;
    font-size: 2rem;
    padding: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.bck-title2 {
    color: #FFCB08;
    font-weight: 600;
    font-size: 2.5rem;

}
.bck-title3 {
    color: #6B8CC7;
    font-weight: 600;
    font-size: 2.5rem;
}
.bck-title4 {
    background: #AFB4DB;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    text-align: center;
    width: 50%;
    font-size: 3.5rem;
    border-radius: 10px;
    margin-left: 25%;
}
.bck-title5 {
    background: #00ADE6;
    padding: 10px;
    color: #F3F4AE;
    font-weight: 600;
    text-align: center;
    width: 50%;
    font-size: 3.5rem;
    border-radius: 10px;
    margin-left: 25%;
}
.bck-title6 {
    background: #ED0281;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    text-align: center;
    width: 50%;
    font-size: 3.5rem;
    border-radius: 10px;
    margin-left: 25%;
}
.bck-title7 {
    background: #FDB813;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    text-align: center;
    width: 50%;
    font-size: 3.5rem;
    border-radius: 10px;
    margin-left: 25%;
}
.bck-title8 {
    color: #fff;
    font-weight: 600;
    background: #1BBED7;
    padding: 9px;
    border-radius: 20px;
    width: 50%;
    border: 3px dotted #F3C208;
}


.bck-example {
	color: #4BB5E5;
	font-family: 'andy_bold';
	font-size: 2.2rem;
	font-weight: 600;
}

/* Navigators */

.logo-publisher {
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height: 44px;
	background: url(imagenes/Pearson-logo-2016-219x286.png) 0 0 no-repeat;
	-webkit-background-size: contain;
	   -moz-background-size: contain;
	     -o-background-size: contain;
	        background-size: contain;
	background-position: center center;

}

.navigator {
	bottom: 0;
	left: 0;
	position: absolute;
	width: 100%;
	padding: 0px 97px;
}

.navigator .title {
	width: calc(100% - 20px);
	overflow: hidden;
	-o-text-overflow: ellipsis;
	   text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.9rem;
	line-height: 4.0rem;
	display: inline-block;
	vertical-align: top;
}

.main-navigator {
	padding: 15px 0px;
	width: 100%;
	border-top: 1px solid #e5e5e5;
}

.navigator .left, .navigator .right {
	width: 49%;
	display: inline-block;
	cursor: pointer;
}

.navigator .left {
	padding-left: 20px;
}

.navigator .right {
	text-align: right;
	padding-right: 20px;
}

.navigator .slider-control.left,
.navigator .slider-control.right {
	position: static;
	height: auto;
	width: 100%;
	background-color: transparent;
	-webkit-border-radius: 0px;
	   -moz-border-radius: 0px;
	        border-radius: 0px;
	margin: 0px;
	opacity: 1;
	text-shadow: none;
	color: #999;
	font-size: 2.7rem;
}

.navigator .slider-control.left:before,
.navigator .slider-control.right:after {
	font-family: 'FontAwesome';
	position: absolute;
	margin-top: 9px;
}

.navigator .slider-control.left:before {
	margin-left: -20px;
	content: "\f104";
}

.navigator .slider-control.right:after {
	margin-left: 20px;
	content: "\f105";
}

.navigator .slider-control span {
	position: static;
	margin: 0px;
    cursor: pointer;
    min-height: 40px;
}

.navbar-bottom {
	background: #132E4C;
	padding-left: 100px;
	padding-right: 100px;
}

.slider-indicators {
    padding-left: 0px;
    padding-right: 0px;
    white-space: nowrap;
}
.edit .slider-indicators {
	white-space: normal;
}
.slider-indicators li,
.edit .slider-indicators li {
	background-color: #ffffff;
    color: #005840;
}

.slider-indicators .active,
.edit .slider-indicators .active,
.slider-indicators li:hover,
.edit .slider-indicators .concat.active,
.slider-indicators .active {
    background-color: #007FA3;
    color: #ffffff;
}
.edit .slider-indicators .concat.active,
.slider-indicators .active {
	color: #007FA3;
}

.edit .slider-indicators .concat.active:before {
		background-color: #007FA3;
}

#bottom-navigator {
	overflow: hidden;
	position: relative;
}
#bottom-navigator .slider-indicators {
	margin-left: auto;
	margin-right: auto;
}
#bottom-navigator .slider-indicators:after {
	content: '';
	display: table;
	clear: both;
}
#bottom-navigator li {
	margin: 10px 8px;
}
#bottom-navigator.show_left:before {
	content: '\F053';
	font-family: 'FontAwesome';
	position: absolute;
	left: 0;
	z-index: 100;
	color: #ffffff;
	top: 10px;
	height: 35px;
	line-height: 3.0rem;
	width: 20px;
	text-align: left;
	background: -webkit-linear-gradient(left, #132E4C, transparent);
	background: -webkit-gradient(linear, left top, right top, from(#132E4C), to(transparent));
	background: -moz-linear-gradient(left, #132E4C, transparent);
	background: -o-linear-gradient(left, #132E4C, transparent);
	background: linear-gradient(to right, #132E4C, transparent);
}

#bottom-navigator.show_right:after {
	content: '\F054';
	font-family: 'FontAwesome';
	position: absolute;
	right: 0;
	color: #ffffff;
	top: 10px;
	height: 35px;
	line-height: 3.0rem;
	width: 20px;
	text-align: right;
	background: -webkit-linear-gradient(right, #132E4C, transparent);
	background: -webkit-gradient(linear, right top, left top, from(#132E4C), to(transparent));
	background: -moz-linear-gradient(right, #132E4C, transparent);
	background: -o-linear-gradient(right, #132E4C, transparent);
	background: linear-gradient(to left, #132E4C, transparent);
}

/* Lists */


.texto_curso ol,
.workspace ul li ol,
.cke_contents ol {
	padding-left: 0;
	list-style-type: none;
}

.texto_curso ol li,
.workspace ul li ol li,
.cke_contents ol li,
.texto_curso ul li,
.workspace ul li ul li,
.cke_contents ul li {
	position: relative;
	counter-increment: bck-li-counter;
	padding-left: 35px;
    padding-bottom: 0px;
    padding-top: 6px;
    font-weight: 600;
}

.texto_curso ol li:before,
.workspace ul li ol li:before,
.cke_contents ol li:before {
	position: absolute;
	top: 6px;
	left: 5px;
	display: inline-block;
	width: 24px;
	margin-right: 5px;
    content: counter(bck-li-counter);
    font-weight: bold;
}

.texto_curso ol.bck-ol1 li:before,
.workspace ul li ol.bck-ol1 li:before,
.cke_contents ol.bck-ol1 li:before {
	height: 24px;
	-webkit-border-radius: 50%;
	   -moz-border-radius: 50%;
	        border-radius: 50%;
	background: none;
	color: #3FC0F0;
	text-align: right;
	font-family: sans-serif;
	width: 26px;
    left: 2px;
    font-weight: 500;
    font-size: 1.9rem;
}

.texto_curso ol.bck-ol2 li:before,
.workspace ul li ol.bck-ol2 li:before,
.cke_contents ol.bck-ol2 li:before {
    content: counter(bck-li-counter);
    left: 0;
    width: 25px;
    text-align: right;
    color: #333;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
}

.texto_curso ul.bck-ul1 li:before,
.workspace ul li ul.bck-ul1 li:before,
.cke_contents ul.bck-ul1 li:before {
    background: #D2DE24;
}

.texto_curso ul.bck-ul2 li:before,
.workspace ul li ul.bck-ul2 li:before,
.cke_contents ul.bck-ul2 li:before {
    background: #F0433A;
}

/* Tables */

.bck-table {
	border-collapse: separate;
	border: 2px solid #4BB5E5;
	-webkit-border-radius: 15px;
	   -moz-border-radius: 15px;
	        border-radius: 15px;
	background: #4BB5E5;
}

.bck-table-borderless,
.bck-table-headed {
	border: 0;
}

.bck-table-borderless {
	background: transparent;
}

.bck-table th,
.bck-table td {
	height: 30px;
	border: none;
	padding: 5px 8px;
}

.bck-table td.bck-td {
	background: #4BB5E5;
}

.bck-table td.bck-td,
.bck-table-normal th,
.bck-table-bordered th {
	color: #fff;
}

.bck-table td {
	background: #fff;
}

.fondo .bck-table td {
	background: #F5F8D5;
}

.bck-table tbody tr:first-child td:first-child {
	-webkit-border-top-left-radius: 15px;
	   -moz-border-radius-topleft: 15px;
	        border-top-left-radius: 15px;
}

.bck-table tbody tr:first-child td:last-child {
	-webkit-border-top-right-radius: 15px;
	   -moz-border-radius-topright: 15px;
	        border-top-right-radius: 15px;
}

.bck-table tr:last-of-type td:first-child {
	-webkit-border-bottom-left-radius: 15px;
	   -moz-border-radius-bottomleft: 15px;
	        border-bottom-left-radius: 15px;
}

.bck-table tr:last-of-type td:last-child {
	-webkit-border-bottom-right-radius: 15px;
	   -moz-border-radius-bottomright: 15px;
	        border-bottom-right-radius: 15px;
}

.bck-table.bck-table-bordered td {
	border: 1px solid #4BB5E5;
}

/* Boxes */

.bck-box {
	position: relative;
}

.box-1 .bck-content {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 2px solid #A1C742;
    padding: 15px;
}

.box-1 .bck-title {
    background: #A1C742;
    padding: 5px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 2.3rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.box-2 .bck-content {
    background: #F4F6F7;
    padding: 15px;
}

.box-2 .bck-title{
	background: #B52249;
    color: #fff;
    font-weight: 700;
    padding: 5px 15px;
}

.box-2 .bck-title:before {
    content: " ";
    left: 86%;
    position: absolute;
    background: url(imagenes/icono_caja2.png);
    padding: 15px 56px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -1px;
    z-index: 999;
}

.box-3 .bck-content{
    background: #F4F6F7;
    padding: 15px;	
}

.box-3 .bck-title{
	background: #7C6EB0;
    color: #fff;
    font-weight: 700;
    padding: 5px 15px;
}

.box-3 .bck-title:before {
    content: " ";
    left: 92%;
    position: absolute;
    background: url(imagenes/icono_caja3.png);
    padding: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -15px;
    z-index: 999;
}



.box-6 {
	background: #FFE9AF;
	padding: 20px 15px 15px;
	font-weight: bolder;
}


.box-7 {
    height: 48px;
	-webkit-border-radius: 20px;
	   -moz-border-radius: 20px;
	        border-radius: 20px;
	background: #CAE5C0;
    padding: 5px 20px;
	color: #4CB848;
	font-weight: bolder;
}

.box-7 .box-title {
	top: 0;
	right: 0;
    width: 48px;
    height: 48px;
	overflow: hidden;
	-webkit-border-radius: 50%;
	   -moz-border-radius: 50%;
	        border-radius: 50%;
	background: #4CB848;
    padding-top: 2px;
	color: #fff;
    font-size: 4.7rem;
	text-align: center;
	text-shadow: 1px 1px #399339,
				 2px 2px #399339,
				 3px 3px #399339,
				 4px 4px #399339,
				 5px 5px #399339,
				 6px 6px #399339,
				 7px 7px #399339,
				 8px 8px #399339,
				 9px 9px #399339,
				 10px 10px #399339,
				 11px 11px #399339,
				 12px 12px #399339,
				 13px 13px #399339,
				 14px 14px #399339,
				 15px 15px #399339,
				 16px 16px #399339,
				 17px 17px #399339,
				 18px 18px #399339,
				 19px 19px #399339,
				 20px 20px #399339,
				 21px 21px #399339,
				 22px 22px #399339,
				 23px 23px #399339,
				 24px 24px #399339,
				 25px 25px #399339,
				 26px 26px #399339,
				 27px 27px #399339,
				 28px 28px #399339,
				 29px 29px #399339,
				 30px 30px #399339,
				 31px 31px #399339,
				 32px 32px #399339,
				 33px 33px #399339,
				 34px 34px #399339,
				 35px 35px #399339,
				 36px 36px #399339,
				 37px 37px #399339,
				 38px 38px #399339,
				 39px 39px #399339,
				 40px 40px #399339;
	line-height: 4.0rem;
}

.box-7 .bck-content {
	height: 100%;
}

.texto_curso .box-7 p {
	line-height: 4.0rem !important;
}

/* Icons */

#actividad .player.audio {
	background: url(imagenes/icono_audio.png) center center / cover;
}
#actividad .content img.player, #actividad .player.audio, #actividad .player.video, #help-panel-content .player, #remote-alert-modal-rich .player{
   height: 30px !important;
    width: 37px;
    border-radius: 0;
    margin: 0;
}

.item-container .icon:before {
	content: "";
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	   -moz-background-size: cover;
	     -o-background-size: cover;
	        background-size: cover;
	background-position: center center;
	display: inline-block;
	vertical-align: middle;
    height: 38px;
    width: 40px;
}

.item-container .icon-escuchar:before {
	background-image: url(imagenes/icono_escuchar.jpg);
}

.item-container .icon-lupa:before {
	background-image: url(imagenes/icono_lupa.jpg);
}

.item-container .icon-leer:before {
	background-image: url(imagenes/icono_leer.jpg);
}

.item-container .icon-travieso:before {
	background-image: url(imagenes/icono_travieso.jpg);
}

.item-container .icon-check:before {
	background-image: url(imagenes/icono_check.jpg);
}

.item-container .icon-circulo:before {
	background-image: url(imagenes/icono_circulo.jpg);
}

.item-container .icon-conversacion:before {
	background-image: url(imagenes/icono_conversacion.jpg);
}

.item-container .icon-A:before {
	background-image: url(imagenes/icono_A.jpg);
}

.item-container .icon-2:before {
	background-image: url(imagenes/icono_2.jpg);
}

.item-container .icon-actuar:before {
	background-image: url(imagenes/icono_actuar.jpg);
}

.item-container .icon-cantar:before {
	background-image: url(imagenes/icono_cantar.jpg);
}

.item-container .icon-casa:before {
	background-image: url(imagenes/icono_casa.jpg);
}
.item-container .icon-dibujar:before {
	background-image: url(imagenes/icono_dibujar.jpg);
}
.item-container .icon-pegar:before {
	background-image: url(imagenes/icono_pegar.jpg);
}
.item-container .icon-question:before {
	background-image: url(imagenes/icono_question.jpg);
}
.item-container .icon-recortar:before {
	background-image: url(imagenes/icono_recortar.jpg);
}
.item-container .icon-unir:before {
	background-image: url(imagenes/icono_unir.jpg);
}


/* Forms */

#actividad .workspace.matching .opcion {
    background-color: white;
}

.slide_main input.solucion {
    border-bottom-color: #ccc;
    background-color: white;
    color: #4BB5E5;
    font-family: 'andy_bold';
    font-size: 2.2rem;
    font-weight: 600;
}

.slide_main input {
display: inline-block;
    padding: 6px 12px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    -webkit-border-radius: 4px;
       -moz-border-radius: 4px;
            border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
       -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -moz-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -moz-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s, -moz-box-shadow ease-in-out .15s;
    font-family: 'andy_bold';
    font-size: 2.2rem;
    font-weight: 600;
}

.slide_main input.respuesta_ko {
    border-color: #ef0c24;
    font-family: 'andy_bold';
    font-size: 2.2rem;
    font-weight: 600;
}

.texto_curso li input {
    font-family: 'andy_bold';
    font-size: 2.2rem;
    font-weight: 600;
}

#actividad textarea {
    font-family: 'andy_bold';
    font-size: 2.2rem;
    font-weight: 600;
}

.slide_main input.respuesta_ok {
    border-color: #74d320;
    background-color: #e9fed6;
    font-family: 'andy_bold';
    font-size: 2.2rem;
    font-weight: 600;
}

/* Budget de nota */

.slide_main .revision-budget, .two-panels .revision-budget {
	margin-top: -35px;
}
