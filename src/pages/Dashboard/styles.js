import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Nav = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content: center;
`;

export const Dates = styled.Text`
  margin: 0 15px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})`
  flex: 1;
`;
