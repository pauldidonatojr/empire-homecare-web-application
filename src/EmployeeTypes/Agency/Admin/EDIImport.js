import React, { useState } from "react";
import {
  Switch,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import Footer from "../Footer";
import { Button, Overlay, ListItem, Avatar } from "react-native-elements";
// Import vector icons
import Icon from "react-native-vector-icons/FontAwesome";

import { SelectList } from "react-native-dropdown-select-list";

import Icon2 from "react-native-vector-icons/Entypo";

import {Checkbox} from 'react-native-paper';

const EDIImports = () => {
  const [index, setIndex] = useState(0);
  
  const [checked, setChecked] = React.useState(false);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  const [selected, setSelected] = React.useState("");

  const CordinatorDropdown = [
    { key: "1", value: "All" },
    { key: "2", value: "Default" },
  ];
  const MCODropdown = [
    { key: "1", value: "AmeriHealth Caritas of PA" },
    { key: "2", value: "Centene PA Health Wellness" },
    { key: "3", value: "KEYSTONE FIRST CHC" },
    { key: "4", value: "UPMC Health Plan" },
  ];
  const StatusDropdown = [
    { key: "1", value: "Active" },
    { key: "2", value: "Discharged" },
  ];
  const InterfaceDropdown = [
    { key: "1", value: "All" },
    { key: "2", value: "Unasigned" },
    { key: "3", value: "Default" },
  ];
  const SearchClicked1 = () => {
    setIndex(1);
    setVisible1(!visible1);
  };

  const toggleOverlay1 = () => {
    setVisible1(!visible1);
  };

  const SearchClicked2 = () => {
    setIndex(2);
    setVisible2(!visible2);
  };

  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  const SearchClicked3 = () => {
    setIndex(3);
    setVisible3(!visible3);
  };

  const toggleOverlay3 = () => {
    setVisible3(!visible3);
  };
  const UploadClicked4 = () => {
    setIndex(0);
    
    setVisible4(!visible4);
    Alert.alert('File Uploaded !') 
  };

  const toggleOverlay4 = () => {
    setVisible4(!visible4);
  };

  const SearchClicked5 = () => {
    setIndex(5);
    setVisible5(!visible5);
  };

  const toggleOverlay5 = () => {
    setVisible5(!visible5);
  };

  const CrossClicked1 = () => {
    setVisible1(!visible1);
  };
  const CrossClicked2 = () => {
    setVisible2(!visible2);
  };
  const CrossClicked3 = () => {
    setVisible3(!visible3);
  };
  const CrossClicked4 = () => {
    setVisible4(!visible4);
  };
  const CrossClicked5 = () => {
    setVisible5(!visible5);
  };

  const IntialView = () => {
    return (
      <View>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            padding: 16,
          }}
        ></Text>
      </View>
    );
  };

  const Imported = () => {
    return (
      <ScrollView >
        {list.map((l, i) => (
          <TouchableOpacity style={{
          }}>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Discipline :</Text> {l.Discipline}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Code :</Text> {l.Code}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>AltCaregiverCode :</Text> {l.AltCaregiverCode}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>SSN :</Text> {l.SSN}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Provider ID :</Text>
                  {l.ProviderId}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>DOB :</Text>
                  {l.DOB}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Phone :</Text>
                  {l.Phone}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Status :</Text> {l.Status}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const PendingFiles = () => {
    return (
      <ScrollView>
        {list2.map((l, i) => (
          <TouchableOpacity>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Discipline :</Text> {l.Discipline}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Code :</Text> {l.Code}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>AltCaregiverCode :</Text> {l.AltCaregiverCode}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>SSN :</Text> {l.SSN}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Provider ID :</Text>
                  {l.ProviderId}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>DOB :</Text>
                  {l.DOB}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Phone :</Text>
                  {l.Phone}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Status :</Text> {l.Status}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const FailedToImport = () => {
    return (
      <ScrollView>
        {list.map((l, i) => (
          <TouchableOpacity>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Discipline :</Text> {l.Discipline}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Code :</Text> {l.Code}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>AltCaregiverCode :</Text> {l.AltCaregiverCode}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>SSN :</Text> {l.SSN}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Provider ID :</Text>
                  {l.ProviderId}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>DOB :</Text>
                  {l.DOB}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Phone :</Text>
                  {l.Phone}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Status :</Text> {l.Status}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const ImportFiles = () => {
    return (
      <ScrollView>
        {list.map((l, i) => (
          <TouchableOpacity>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Discipline :</Text> {l.Discipline}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Code :</Text> {l.Code}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>AltCaregiverCode :</Text> {l.AltCaregiverCode}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>SSN :</Text> {l.SSN}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Provider ID :</Text>
                  {l.ProviderId}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>DOB :</Text>
                  {l.DOB}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Phone :</Text>
                  {l.Phone}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Status :</Text> {l.Status}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Reprocessing = () => {
    return (
      <ScrollView>
        {list.map((l, i) => (
          <TouchableOpacity>
            <ListItem key={i} bottomDivider style={styles.ListItem}>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {" "}
                  <Text>Discipline :</Text> {l.Discipline}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>Code :</Text> {l.Code}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>AltCaregiverCode :</Text> {l.AltCaregiverCode}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  {" "}
                  <Text>SSN :</Text> {l.SSN}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Provider ID :</Text>
                  {l.ProviderId}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>DOB :</Text>
                  {l.DOB}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Phone :</Text>
                  {l.Phone}
                </ListItem.Subtitle>

                <ListItem.Subtitle>
                  <Text>Status :</Text> {l.Status}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const list = [
    {
      name: "Amy Farha",
      Code: "78975",
      AltCaregiverCode: "CD5452",
      SSN: "DA1324S56",
      ProviderId: "4578SD55",
      DOB: "10 Jul 1995",
      Phone: "02031953204",
      Status: "Active",
      Discipline: "Dental",
    },
    {
      name: "Chris Jackson",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
    ,
    {
      name: "Chris Jackson",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
    {
      name: "Chris Jackson",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
  ];
  const list2 = [
    {
      name: "Ali Hassan",
      Code: "78975",
      AltCaregiverCode: "CD5452",
      SSN: "DA1324S56",
      ProviderId: "4578SD55",
      DOB: "10 Jul 1995",
      Phone: "02031953204",
      Status: "Active",
      Discipline: "Dental",
    },
    {
      name: "Jones James",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
    ,
    {
      name: "Phipli Oju",
      Code: "AS215",
      AltCaregiverCode: "2556AS",
      SSN: "DA1ADADAS2",
      ProviderId: "45745512",
      DOB: "15 Jan 1989",
      Phone: "02031953235",
      Status: "Active",
      Discipline: "Cleaning",
    },
  ];

  const renderViews = () => {
    switch (index) {
      case 0:
        return IntialView();
      case 1:
        return Imported();
      case 2:
        return PendingFiles();
      case 3:
        return FailedToImport();
      case 4:
        return ImportFiles();
      case 5:
        return Reprocessing();

      default:
        return IntialView();
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/*  */}
      {/* Header */}
      <View style={{ width: "100%", height: "10%" }}>
        {/* Greetings */}
        <View style={styles.greetings}>
          <Text style={{ fontSize: 25, color: "#1B365C" }}>Hi,</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1B365C" }}>
            {" "}
            Hector
          </Text>
        </View>
        {/* Agency Name */}
        <View style={styles.agency}>
          <Text style={{ fontSize: 20, color: "#1B365C" }}>
            Empire Home Care Agency LLC.
          </Text>
        </View>
      </View>

      {/* Notifications Part */}
      <View style={styles.actionsHolder}>
        <View
          style={{ width: "50%", height: "100%", alignItems: "flex-start" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Notifications</Text>
          </View>
        </View>
        <View style={{ width: "50%", height: "100%", alignItems: "flex-end" }}>
          <View
            style={{
              width: "70%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Menu</Text>
          </View>
        </View>
      </View>

      <View style={styles.iconholder}>
        <TouchableOpacity style={styles.iconbody}>
          <Icon
            style={styles.icon}
            name="clipboard"
            size={20}
            onPress={toggleOverlay1}
          ></Icon>
          <Text style={{ fontSize: 12 }}>Imported Files</Text>
          
        </TouchableOpacity>

        <Overlay
          overlayStyle={{
            borderRadius: 15,
            width: "90%",
            height: "85%",
            padding: "10%",
          }}
          isVisible={visible1}
          onBackdropPress={toggleOverlay1}
        >
          <Icon2
            style={styles.icon2}
            name="cross"
            size={25}
            onPress={CrossClicked1}
          ></Icon2>
          <ScrollView>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={InterfaceDropdown}
                placeholder="Interface"
                save="value"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Import From Date dd/mm/yyyy"
            />
            <TextInput
              style={styles.input}
              placeholder="Import To Date dd/mm/yyyy"
            />
            <Button title="Search" onPress={SearchClicked1} />
          </ScrollView>
        </Overlay>

        <TouchableOpacity style={styles.iconbody}>
          <Icon
            style={styles.icon}
            name="clipboard"
            size={20}
            color={"blue"}
            onPress={toggleOverlay2}
          ></Icon>
          <Text style={{ fontSize: 12 }}>Pending Files</Text>
        </TouchableOpacity>
        <Overlay
          overlayStyle={{
            borderRadius: 15,
            width: "90%",
            height: "85%",
            padding: "10%",
          }}
          isVisible={visible2}
          onBackdropPress={toggleOverlay2}
        >
          <Icon2
            style={styles.icon2}
            name="cross"
            size={25}
            onPress={CrossClicked2}
          ></Icon2>
          <ScrollView>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={InterfaceDropdown}
                placeholder="Interface"
                save="value"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Import From Date dd/mm/yyyy"
            />
            <TextInput
              style={styles.input}
              placeholder="Import To Date dd/mm/yyyy"
            />
            <Button title="Search" onPress={SearchClicked2} />
          </ScrollView>

        </Overlay>

        <TouchableOpacity style={styles.iconbody}>
          <Icon
            style={styles.icon}
            name="clipboard"
            size={20}
            color={"red"}
            onPress={toggleOverlay3}
          ></Icon>
          <Text style={{ fontSize: 12 }}>Failed To Import</Text>
        </TouchableOpacity>
        <Overlay
          overlayStyle={{
            borderRadius: 15,
            width: "90%",
            height: "85%",
            padding: "10%",
          }}
          isVisible={visible3}
          onBackdropPress={toggleOverlay3}
        >
          <Icon2
            style={styles.icon2}
            name="cross"
            size={25}
            onPress={CrossClicked3}
          ></Icon2>
          <ScrollView>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={InterfaceDropdown}
                placeholder="Interface"
                save="value"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Import From Date dd/mm/yyyy"
            />
            <TextInput
              style={styles.input}
              placeholder="Import To Date dd/mm/yyyy"
            />
            <Button title="Search" onPress={SearchClicked3} />
          </ScrollView>

        </Overlay>
      </View>
      <View style={styles.iconholder}>
        <TouchableOpacity style={styles.iconbody}>
          <Icon
            style={styles.icon}
            name="clipboard"
            size={20}
            color={"#b22222"}
            onPress={toggleOverlay4}
          ></Icon>
          <Text style={{ fontSize: 12 }}>Import Files</Text>
        </TouchableOpacity>
        <Overlay
          overlayStyle={{
            borderRadius: 15,
            width: "90%",
            height: "85%",
            padding: "10%",
          }}
          isVisible={visible4}
          onBackdropPress={toggleOverlay4}
        >
          <Icon2
            style={styles.icon2}
            name="cross"
            size={25}
            onPress={CrossClicked4}
          ></Icon2>
          <ScrollView>
          <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={InterfaceDropdown}
                placeholder="Interface"
                save="value"
              />
            </View>
            <View style = {styles.checkbox}>
        
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <View style = {styles.checkboxText}>
    <Text style ={{fontSize:12.5,color : 'grey'}}>Browse</Text>
    </View>
    </View>
    <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={InterfaceDropdown}
                placeholder="Usage"
                save="value"
              />
            </View>
            <Button title="Upload" onPress={UploadClicked4} />
          </ScrollView>
        </Overlay>
        <TouchableOpacity style={styles.iconbody}>
          <Icon
            style={styles.icon}
            name="clipboard"
            size={20}
            color={"black"}
            onPress={toggleOverlay5}
          ></Icon>
          <Text style={{ fontSize: 12 }}>Re-Processing</Text>
        </TouchableOpacity>
        <Overlay
          overlayStyle={{
            borderRadius: 15,
            width: "90%",
            height: "85%",
            padding: "10%",
          }}
          isVisible={visible5}
          onBackdropPress={toggleOverlay5}
        >
           <Icon2
            style={styles.icon2}
            name="cross"
            size={25}
            onPress={CrossClicked5}
          ></Icon2>
          <ScrollView>
            <View style={styles.dropdown}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={InterfaceDropdown}
                placeholder="Interface"
                save="value"
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Import From Date dd/mm/yyyy"
            />
            <TextInput
              style={styles.input}
              placeholder="Import To Date dd/mm/yyyy"
            />
            <Button title="Search" onPress={SearchClicked5} />
          </ScrollView>
        </Overlay>
        
      </View>
      {renderViews()}

      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  greetings: {
    width: "100%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconholder: {
    flexDirection: "row",
    padding: 5,
  },
  dropdown: {
    borderWidth: 0,
    borderColor: "#777",
    padding: 8,
    width: 265,
    borderRadius: 10,
    marginBottom: "10%",
  },
  icon2: {
    marginLeft: 250,
    color: "black",
    marginTop: 0,
    marginBottom: 15,
  },
  icon: {
    flexDirection: "column",
  },
  iconbody: {
    width: "33.33%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  agency: {
    width: "100%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  ListItem: {
    backgroundColor: "#B3CCFD",
    padding: 10,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginLeft: "2.5%",
    width: 250,
    borderRadius: 10,
    marginBottom: "10%",
  },
  fieldholder: {},

  actionsHolder: {
    width: "100%",
    height: "10%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userHeaderButtons: {
    width: "100%",
    height: "10%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: "45%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#1B365C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  filterHolder: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 5,
    alignItems: "center",
    paddingVertical: 20,
    width: "50%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#1B365C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  ongoingTreatment: {
    position: "relative",
    width: "90%",
    height: 300,
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    flexDirection: "column",
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: "#1B365C",
  },
  tableHolder: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    width: "90%",
    height: 300,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: "white",
  },
  selectorScrollView: {
    position: "relative",
    width: "100%",
    height: "65%",
    marginTop: "10%",
  },
});

export default EDIImports;
