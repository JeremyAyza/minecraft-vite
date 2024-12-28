import { groundTexture } from "@/lib/textures";
import { usePlane } from "@react-three/cannon";
import type { Mesh } from "three";

export const Ground = () => {
	groundTexture.repeat.set(100, 100);
	const [ref] = usePlane<Mesh>(() => ({
		rotation: [-Math.PI / 2, 0, 0], // x, y, z
		position: [0, -0.5, 0], // x, y, z
	}));
	return (
		<mesh ref={ref as React.MutableRefObject<Mesh>}>
			<planeGeometry attach="geometry" args={[100, 100]} />
			<meshStandardMaterial
				attach="material"
				map={groundTexture}
				color={"#3e3"}
			/>
		</mesh>
	);
};
