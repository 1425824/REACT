import React ,{Component} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


export default function PDFBuilder(props) {
   console.warn("pdf props", props)

        return (
            <Document>
                <Page size="A4" style={styles.page}>

                    {props.props && props.props.length > 0 && props.props.map((exercici) => 

                            <View key={1} style={styles.section}>
                                <Text>{exercici.exID}</Text> 
                            </View>
                        
                    )}
                    
                    <View style={styles.section}>
                    <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
            
        );
    
}
    
        const styles = StyleSheet.create({
            page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
            },
            section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,
            
            }
        });
    