import{proxy} from 'valtio';

const state = proxy({
 intro:true,
 color:'#EFBD48',
 ISLogoTexture: true,
 isFullTexture: false,
 logoDecal:'./threejs.png',
 fullDecal:'./threejs.png'
});

export default state;