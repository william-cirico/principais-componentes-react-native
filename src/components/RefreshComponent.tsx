import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}



export default function RefreshComponent() {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setDados] = useState([]);

    // cont fethApi = async () => {
    //     const dados = await axios.get("https://www.servidor.com.br:8081")
    //     setDados(dados)
    // }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

