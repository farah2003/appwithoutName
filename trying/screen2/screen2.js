import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default class feed extends React.Component{
	render({
		<FlatList
		contentContainerStyle={styles.container}
		data={['farah','aya','mai','nour']}
		renderItem={({item})=>{
			return(
				<Text style={{fontSize:24,marginTop:100}}
				{item}
				</text>
				);
			}
		}
		</FlatList>
	});
}
