import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import images from "@/helpers/images";


const { grassImg, dirtImg, logImg, woodImg, glassImg } = images;

const generateTexture = (img: string) => {
    const texture = new TextureLoader().load(img)
    // texture.wrapS = RepeatWrapping
    // texture.wrapT = RepeatWrapping
    texture.magFilter = NearestFilter
    return texture
}

const [grassTexture, dirtTexture, logTexture, woodTexture, glassTexture] = [grassImg, dirtImg, logImg, woodImg, glassImg].map(generateTexture)

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping

export { grassTexture, dirtTexture, logTexture, woodTexture, glassTexture };