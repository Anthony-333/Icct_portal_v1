import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Subject Code', 'Subject Title'],
      tableTitle: ['OLCAPS2', 'OLCC05', 'OLPF1 ', 'OLIAS2'],
      tableData: [
        ['Capstone Project and Research 2'],
        ['applications development and emerging technologies'],
        ['event driven programming'],
        ['information assurance and security 2'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C4C4C4'}}>
          <Row
            data={state.tableHead}
            flexArr={[1, 2, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={state.tableTitle}
              style={styles.title}
              heightArr={40}
              textStyle={styles.textTitle}
            />
            <Rows
              data={state.tableData}
              flexArr={[1, 1]}
              style={styles.row}
              textStyle={styles.textData}
            />
          </TableWrapper>
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#0067FF'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#fff'},
  row: {height: 40},
  text: {textAlign: 'center', color: '#fff'},
  textTitle: {textAlign: 'center', color: '#000'},
  textData: {textAlign: 'center', color: '#000'},
});
