import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../theme';

export const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={theme.colors.gray[400]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
      {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing[4],
  },
  label: {
    ...theme.typography.styles.label,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[2],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.primary,
    borderWidth: 1,
    borderColor: theme.colors.border.main,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing[4],
    minHeight: 48,
  },
  inputFocused: {
    borderColor: theme.colors.primary[700],
    borderWidth: 2,
  },
  inputError: {
    borderColor: theme.colors.error.main,
  },
  input: {
    flex: 1,
    ...theme.typography.styles.body,
    color: theme.colors.text.primary,
    paddingVertical: theme.spacing[3],
  },
  leftIcon: {
    marginRight: theme.spacing[2],
  },
  rightIcon: {
    marginLeft: theme.spacing[2],
    padding: theme.spacing[1],
  },
  errorText: {
    ...theme.typography.styles.caption,
    color: theme.colors.error.main,
    marginTop: theme.spacing[1],
  },
  helperText: {
    ...theme.typography.styles.caption,
    color: theme.colors.text.tertiary,
    marginTop: theme.spacing[1],
  },
});
