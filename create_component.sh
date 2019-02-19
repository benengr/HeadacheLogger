#!/bin/bash
if [ -z ${1+x} ]; then
    echo "Usage create_component.sh <component name>"
    exit 1
fi

comp="$(tr '[:lower:]' '[:upper:]' <<< ${1:0:1})${1:1}"
echo "Creating component $comp"

FILENAME="components/$comp.tsx"
if [ -e $FILENAME ]
then
    echo "$FILENAME already exists"
    exit 1
fi


echo "import React, {Component} from 'react';" >> $FILENAME
echo "import { StyleSheet, View} from 'react-native';" >> $FILENAME
echo  >> $FILENAME
echo "interface Props {}" >> $FILENAME
echo "export default class $comp extends Component<Props> {" >> $FILENAME
echo "  render() {" >> $FILENAME
echo "    return (" >> $FILENAME
echo "      <View style={styles.container}>" >> $FILENAME
echo >> $FILENAME
echo "      </View>" >> $FILENAME
echo "    );" >> $FILENAME
echo "  }" >> $FILENAME
echo "}" >> $FILENAME
echo >> $FILENAME
echo "const styles = StyleSheet.create({" >> $FILENAME
echo "  container: {" >> $FILENAME
echo "    flex: 1," >> $FILENAME
echo "    justifyContent: 'center'," >> $FILENAME
echo "    alignItems: 'center'," >> $FILENAME
echo "    backgroundColor: '#F5FCFF'," >> $FILENAME
echo "  }," >> $FILENAME
echo "});" >> $FILENAME
