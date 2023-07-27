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

    arrowCta: {
        display: 'block',
        height: '13px',
        width: '13px',
        border: '11px solid transparent',
        transform: 'rotate(45deg)',
        position: 'relative',
        margin: '25vh auto',
        opacity: '.4',
        '&:after, &:before': {
            content: '""',
            display: 'block',
            height: 'inherit',
            width: 'inherit',
            position: 'absolute',
            top: '0',
            left: '0',
        },
        '&:after': {
            borderBottom: '3px solid white',
            borderRight: '3px solid white',
            top: '0',
            left: '0',
            opacity: 1,
            animation: `${BottomArrow} 1.65s infinite`,
        },
        '&:before': {
            top: '0',
            left: '0',
            borderbottom: '3px solid white',
            borderRight: '3px solid white',
            animation: `${TopArrow} 1.65s infinite`,
        },
    },
    animatedarrow: {
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: `${AnimatedArrow} 1.65s infinite`,
    },
}));
