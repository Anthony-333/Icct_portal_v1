import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';

const CustomTable = ({tableHeadItems, widthArrItems, rowDataItems}) => {
  const tableHead = tableHeadItems;
  const widthArr = widthArrItems;

  const rowData = rowDataItems;

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#C1C0B9'}}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.header}
              textStyle={styles.headText}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#C1C0B9'}}>
              <Row
                data={rowData.row1}
                widthArr={widthArr}
                style={[styles.row]}
                textStyle={styles.text}
              />
              <Row
                data={rowData.row2}
                widthArr={widthArr}
                style={[styles.row]}
                textStyle={styles.text}
              />
              <Row
                data={rowData.row3}
                widthArr={widthArr}
                style={[styles.row]}
                textStyle={styles.text}
              />
              <Row
                data={rowData.row4}
                widthArr={widthArr}
                style={[styles.row]}
                textStyle={styles.text}
              />
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#F0F0F0'},
  header: {height: 50, backgroundColor: '#0067FF'},
  headText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 13,
  },
  dataWrapper: {marginTop: -5},
  row: {height: 40, backgroundColor: '#fff'},
});

export default CustomTable;
