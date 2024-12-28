import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/ground";
import { FVP } from "./components/fpv";

function App() {
	return (
		<Canvas>
			<Sky sunPosition={[100, 100, 20]} />
			<ambientLight intensity={0.5} />
			<FVP />
			<Physics>
				<Ground />
			</Physics>
		</Canvas>
	);
}

export default App;
