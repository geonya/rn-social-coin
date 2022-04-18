import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;

const Login = ({ navigation: { navigate } }) => {
	return (
		<Container>
			<Text>
				Don't have account?
				<Btn>
					<BtnText onPress={() => navigate("Join")}>Join</BtnText>
				</Btn>
			</Text>
		</Container>
	);
};

export default Login;
