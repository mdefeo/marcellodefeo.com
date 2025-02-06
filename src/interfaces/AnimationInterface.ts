import { RefObject } from 'react';

export type AnimateBordersFunction = (
callback: () => void,
) => void;

export interface AnimationConfig {
duration: number;
ease: string;
delay?: number;
}

export interface BorderAnimationProps {
onComplete?: () => void;
}