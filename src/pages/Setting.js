/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text} from 'react-native';
import NotLoggedIn from '../components/NotLoggedIn';


const Setting = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NotLoggedIn navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20, marginTop: 30}}>Akun</Text>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20, alignSelf: "baseline"}}>Pembayaran</Text>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20}}>Riwayat Pemesanan</Text>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20}}>Notifikasi</Text>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20}}>Bahasa</Text>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20}}>Syarat dan Ketentuan</Text>
        <Text style={{fontWeight: 'bold', color: 'grey', marginHorizontal: 20, marginBottom: 20}}>Kebijakan Privasi</Text>

        <Button title="KELUAR" onPress={() => navigation.navigate('Login')} />
      </ScrollView>
    </SafeAreaView>
  ) 
};

export default Setting;
