import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../../firebase/firebase';
//import { async } from '@firebase/util';

const Donation = () => {
    const [fullname, setFullname] = useState(null);
    const [accountnumber, setAccountNumber] = useState(null);
    const [refnumber, setRefNumber] = useState(null);
    const saveData = async () => {
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, 'users'), {
            Fullname: fullname,
            AccountNumber: accountnumber,
            RefNumber: refnumber
        });
        console.log("Document written with ID: ", docRef.id);
    }
    return (
        <ScrollView>
            <View style={Styles.container}>
                <Image style={Styles.Image} source={require('../Images/Logo/sdg10.png')} />
                <Text style={Styles.Text}>
                    90% of your donation provides better education for autism children in need.
                </Text>
                <Text style={Styles.Text1}>
                    [10% use for application maintenance]
                </Text>

                <Text style={Styles.Text2}>Choose an account:</Text>
                <Text style={Styles.Text3}>Bank Islam , Ref: Auticore</Text>
                <Text style={Styles.Text3}>Account Number: 1234567890</Text>
                <Text style={Styles.Text3}>--------------</Text>
                <Text style={Styles.Text3}>Am Bank , Ref: Auticore</Text>
                <Text style={Styles.Text3}>Account Number: 1234567890</Text>

                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 25,
                    marginVertical: 15,
                }}>Submit Donation Info 👇</Text>
                <View>
                    <TextInput
                        placeholder="Full Name"
                        onChangeText={(text) => setFullname(text)}
                        style={{
                            margin: 5,
                            marginVertical: 10,
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                    />
                    <TextInput
                        placeholder="Account Number"
                        onChangeText={(text) => setAccountNumber(text)}
                        style={{
                            margin: 5,
                            marginVertical: 10,
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                    />
                    <TextInput
                        placeholder="Ref Number"
                        onChangeText={(text) => setRefNumber(text)}
                        style={{
                            margin: 5,
                            marginVertical: 10,
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: 'green',
                        height: 50,
                        margin: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onPress={() => saveData}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


export default Donation

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c9ff3",
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    Image: {
        width: 300,
        height: 140,
        margin: 5,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderRadius: 4,
        borderWidth: 1,
    },
    Text: {
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'Bold',
        textAlign: 'center',
        color: 'white',
    },
    Text1: {
        //paddingTop: 5,
        //marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'Bold',
        textAlign: 'center',
        color: 'white',
    },
    Text2: {
        //paddingTop: 5,
        //marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
        fontWeight: 'Bold',
        textAlign: 'center',
        color: 'red',
    },
    Text3: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
        fontWeight: 'Bold',
        color: 'white',
    },
})