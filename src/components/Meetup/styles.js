import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const MeetupBanner = styled.Image`
  width: auto;
  height: 150px;
`;

export const InfoContainer = styled.View`
  padding: 20px;
`;

export const MeetupTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const MeetupDate = styled.Text`
  margin-left: 5px;
  color: #999;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const MeetupLocation = styled.Text`
  margin-left: 5px;
  color: #999;
`;

export const OrganizerContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const MeetupOrganizer = styled.Text`
  margin-left: 5px;
  color: #999;
`;

export const RegisterButton = styled(Button)`
  margin-top: 5px;
  opacity: ${props => (props.enabled ? 1 : 0.6)};
`;
