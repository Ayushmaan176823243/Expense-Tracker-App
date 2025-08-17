import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import ModalWrapper from "@/components/ModalWrapper";
import Typo from "@/components/typo";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { StyleSheet, View } from "react-native";

const PrivacyAndPolicy = () => {
  return (
    <ModalWrapper>
      <Header
        title="Privacy and Policy"
        leftIcon={<BackButton />}
        style={{ marginLeft: spacingY._10 }}
      />
      <View style={styles.policyContainer}>
        <Typo style={styles.textcontainer}>
          Your privacy is important to us. This Expense Tracker app collects
          only the information necessary to provide you with its core features,
          such as tracking your income, expenses, and related notes. The
          information you enter, including expense details, categories, and
          optional receipt images, is stored securely and is never sold or
          shared with third parties. If you choose to sign up with an account,
          basic personal details like your name, email address, or login
          credentials may be collected to sync your data across devices. Device
          information such as model, operating system, and crash logs may also
          be collected to improve performance. All data is stored securely using
          industry-standard practices, and you remain in control of your
          information, with the option to edit or delete your account at any
          time. Third-party services such as authentication providers, cloud
          storage, or analytics tools may be used to support app functionality,
          and these services follow their own privacy policies. Our app is not
          designed for children under 13, and we do not knowingly collect
          information from them. By using this app, you agree to the terms of
          this Privacy Policy. If you have any questions or requests regarding
          your data, please contact us at{"\n"}
          <Typo style={{ color: colors.primary }}>
            [ayushmaanratan@gmail.com].
          </Typo>
        </Typo>
      </View>
    </ModalWrapper>
  );
};

export default PrivacyAndPolicy;

const styles = StyleSheet.create({
  policyContainer: {
    backgroundColor: colors.neutral800,
    flex: 1,
  },
  textcontainer: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: verticalScale(50),
    fontSize: verticalScale(15),
    marginLeft: 20,
    marginRight: 20,
  },
});
