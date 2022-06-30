import {View, Text, Dimensions} from 'react-native';
import React from 'react';

var height = Dimensions.get('window').height; //full width
var width = Dimensions.get('window').width; //full width

import CustomTable from '../CustomTable';
import TableItems from '../tableItems';

const AccountItem = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        marginHorizontal: 10,
        marginVertical: 5,
      }}>
      <Text
        style={{
          color: '#0067FF',
          fontWeight: 'bold',
          fontSize: 17,
          marginLeft: 12,
          marginTop: 5,
        }}>
        TRAIL
      </Text>

      <CustomTable
        tableHeadItems={[
          'Transaction Date',
          'Description',
          'OR #',
          'Voucher #',
          'Debit',
          'Credit',
          'Balance',
        ]}
        widthArrItems={[150, 300, 100, 100, 100, 100, 100]}
        rowDataItems={TableItems.table1}
      />

      <Text
        style={{
          color: '#0067FF',
          fontWeight: 'bold',
          fontSize: 17,
          marginLeft: 12,
          marginTop: 5,
        }}>
        ASSESSMENT FEES
      </Text>

      <CustomTable
        tableHeadItems={['OR#', 'Description', 'Amount', 'Date', 'Cashier']}
        widthArrItems={[150, 300, 100, 100, 100]}
        rowDataItems={TableItems.table2}
      />

      <Text
        style={{
          color: '#0067FF',
          fontWeight: 'bold',
          fontSize: 17,
          marginLeft: 12,
          marginTop: 5,
        }}>
        NON-ASSESSMENT FEES
      </Text>

      <CustomTable
        tableHeadItems={['OR#', 'Description', 'Amount', 'Date', 'Cashier']}
        widthArrItems={[150, 300, 100, 100, 100]}
        rowDataItems={TableItems.table3}
      />

      <Text> </Text>
    </View>
  );
};

export default AccountItem;
