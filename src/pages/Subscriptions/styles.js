import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SubscriptionList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})`
  flex: 1;
`;

export const NoSubscriptions = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoSubscriptionsText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
