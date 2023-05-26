import React from 'react';
import { Text } from 'react-native';
import styles from './ErrorMessageStyles';

interface ErrorMessageProps {
    message: string,
}

const ErrorMessage = (props: ErrorMessageProps) => {
    return (
        <Text style={styles.message}>{props.message}</Text>
    )
}

export default ErrorMessage;