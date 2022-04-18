import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";

const Container = styled.View``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Home = () => {
	return (
		<Container>
			<Btn>
				<BtnText>Log Out</BtnText>
			</Btn>
		</Container>
	);
};

export default Home;
