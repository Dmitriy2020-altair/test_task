import styled from "styled-components";

export const Loader = styled.div`
  margin: 0 0 3% 50%;
  transform: scale(0.5);
  display: inline-block;
  height: 1em;
  width: 1em;
  line-height: 1;
  vertical-align: middle;
  border-radius: 1em;
  transition: all 150ms linear 0s;
  color: #fff;
  box-shadow: 0.8308300259970207em
      1.8192639907121204em 0
      -0.14583333333333331em,-0.28462967655759175em
      1.9796428837602809em 0
      -0.14583333333333331em,-1.30972146790179em
      1.5114991486987945em 0
      -0.14583333333333331em,-1.918985947234223em
      0.5634651136650534em 0
      -0.14583333333333331em,-1.9189859472227206em
      -0.5634651137042269em 0
      -0.14583333333333331em,-1.3097214678709352em
      -1.5114991487255303em 0
      -0.14583333333333331em,-0.2846296765171809em
      -1.979642883766091em 0
      -0.14583333333333331em,0.8308300260341593em
      -1.8192639906951598em 0
      -0.14583333333333331em,1.6825070656824284em
      -1.0812816348799716em 0
      -0.14583333333333331em;
  animation: spinDots 1100ms infinite steps(11);
}
@keyframes spinDots {
  0% {
    transform: scale(0.5) rotate(0);
    animation-timing-function: cubic-bezier(.55,.055,.675,.19);
  }
  50% {
    transform: scale(0.5) rotate(180deg);
    animation-timing-function: cubic-bezier(.215,.61,.355,1);
  }
  100% {
    transform: scale(0.5) rotate(360deg);
  }
`