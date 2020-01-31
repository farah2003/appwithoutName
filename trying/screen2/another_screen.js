import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default class another_screen extends React.Component {
	render({
		<FlatList
		contentContainerStyle={styles.container}
		data={['farah','aya','mai','nour']}
		renderItem={({item})=>{
			return(
					<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("screen2", {
									uri: item
								});
							}}
						>
						<Text>
						farah
						</Text>
						</TouchableOpacity>
				);
			}
		}
		</FlatList>
	});
}
