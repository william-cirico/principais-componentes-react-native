import { FlatList, ScrollView } from "react-native";
import Item from "./Item";

export default function FlatListComponente() {
    const data = [
        {id: "jshdfiusahd872341asf-1238712398", title: "Cachorro", image: "https://www.rbsdirect.com.br/imagesrc/25393328.jpg"},
        {id: "jshdfiusahd872341asf-1238712399", title: "Attack on Titan: Conheça os nove Titãs Originais", image: "https://sm.ign.com/t/ign_br/screenshot/default/aot_qs3p.h960.jpg"},
        {id: "jshdfiusahd872341asf-1238712397", title: "Gamer aleatório", image: "https://pbs.twimg.com/profile_images/1151958380023570444/1LttfZMS_400x400.jpg"},
        {id: "jshdfiusahd872341asf-1238712396", title: "Corvinal", image: "https://img.quizur.com/f/img5edf0ab30bab17.17522117.jpg"},
    ];

    return (        
            <FlatList 
                data={data}
                renderItem={({item}) => <Item title={item.title} image={item.image} /> }
                keyExtractor={(item) => item.id}
            />        
    );
}

/* {
    data.map(item => <Item key={item.id} title={item.title} image={item.image} />)
} */