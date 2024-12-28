import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import images from "@/helpers/images";

const groundTexture = new TextureLoader().load(images.grassImg)
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapS = RepeatWrapping
groundTexture.magFilter = NearestFilter
export { groundTexture };