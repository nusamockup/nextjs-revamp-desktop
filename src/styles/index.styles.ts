import { createStyles } from '@ns-ui/core';
import { keyframes } from '@emotion/react';

const AnimatedArrow = keyframes`
0% {
    opacity: .5;
    transform: translate(0, 0);
  }
  45% {
    opacity: 0;
    transform: translate(0px, 12px);
  }
  46% {
    opacity: 0;
    transform: translate(0px, -16px);
  }
  90% {
    opacity: .5;
    transform: translate(0px, -6px);
  }
  100% {
    opacity: .5;
    transform: translate(0px, -6px);
  }
`;

const aniMouse = keyframes`
	0% {
        opacity: 1;
        top: 29%;
	}
	15% {
        opacity: 1;
        top: 50%;
	}
	50% {
        opacity: 0;
        top: 50%;
	}
	100% {
        opacity: 0;
        top: 29%;
	}
`;

const BottomArrow = keyframes`
0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  45% {
    opacity: 0;
    transform: translate(12px, 12px);
  }
  46% {
    opacity: 0;
    transform: translate(-16px, -16px);
  }
  90% {
    opacity: .5;
    transform: translate(-6px, -6px);
  }
  100% {
    opacity: .5;
    transform: translate(-6px, -6px);
  }
`;

const TopArrow = keyframes`
0% {
    transform: translate(-6px, -6px);
  }
  35% {
    transform: translate(0, 0);
  }
  90% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export default createStyles((theme) => ({
    html: {
        backgroundColor: '#f8f9fa !important',
    },

    // arrowCta: {
    //     display: 'block',
    //     height: '13px',
    //     width: '13px',
    //     border: '11px solid transparent',
    //     transform: 'rotate(45deg)',
    //     position: 'relative',
    //     margin: '25vh auto',
    //     opacity: '.4',
    //     '&:after, &:before': {
    //         content: '""',
    //         display: 'block',
    //         height: 'inherit',
    //         width: 'inherit',
    //         position: 'absolute',
    //         top: '0',
    //         left: '0',
    //     },
    //     '&:after': {
    //         borderBottom: '3px solid white',
    //         borderRight: '3px solid white',
    //         top: '0',
    //         left: '0',
    //         opacity: 1,
    //         animation: `${BottomArrow} 1.65s infinite`,
    //     },
    //     '&:before': {
    //         top: '0',
    //         left: '0',
    //         borderbottom: '3px solid white',
    //         borderRight: '3px solid white',
    //         animation: `${TopArrow} 1.65s infinite`,
    //     },
    // },
    animatedarrow: {
        marginLeft: 'auto',
        marginRight: 'auto',
        // animation: `${AnimatedArrow} 4.95s infinite`,
        animation: `${AnimatedArrow} 1.65s infinite`,
    },

    scrollBtn: {
        display: 'block',
        position: 'absolute',
        left: '0',
        right: '0',
        textAlign: 'center',
        '& > *:hover, & > *:focus, & > *.active': {
            color: '#ffffff',
        },
        '& > *:hover,&  > *:focus,&  > *:active,&  > *.active': {
            opacity: 0.8,
            filter: 'alpha(opacity=80)',
        },
    },
    mouse: {
        position: 'relative',
        display: 'block',
        width: '25px',
        height: '35px',
        margin: '40px auto 20px',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        boxSizing: 'border-box',
        border: '3px solid rgba(255,255,255,.55)',
        borderRadius: '23px',
        '& > *': {
            position: 'absolute',
            display: 'block',
            top: '29%',
            left: '50%',
            width: '6px',
            height: '6px',
            margin: '-3px 0 0 -3px',
            background: 'white',
            borderRadius: '50%',
            WebkitAnimation: `${aniMouse} 2.5s linear infinite`,
            MozAnimation: `${aniMouse} 2.5s linear infinite`,
            animation: `${aniMouse} 2.5s linear infinite`,
        },
    },
}));
