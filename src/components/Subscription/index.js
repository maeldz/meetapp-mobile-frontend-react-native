import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  MeetupBanner,
  InfoContainer,
  MeetupTitle,
  DateContainer,
  MeetupDate,
  LocationContainer,
  MeetupLocation,
  OrganizerContainer,
  MeetupOrganizer,
  CancelButton,
} from './styles';

export default function Subscription({
  data,
  onCancel,
  loading,
  clickedButtonId,
}) {
  const { meetup, subscription_id } = data;
  const dateFormatted = format(
    parseISO(meetup.date),
    "dd 'de' MMMM', ás' H'h'",
    {
      locale: ptBR,
    },
  );

  return (
    <Container>
      <MeetupBanner
        source={{
          uri: meetup.banner.url.replace('localhost', '10.0.2.2'),
        }}
      />
      <InfoContainer>
        <MeetupTitle>{meetup.title}</MeetupTitle>
        <DateContainer>
          <Icon name="event" size={14} color="#999" />
          <MeetupDate>{dateFormatted}</MeetupDate>
        </DateContainer>
        <LocationContainer>
          <Icon name="place" size={14} color="#999" />
          <MeetupLocation>{meetup.location}</MeetupLocation>
        </LocationContainer>
        <OrganizerContainer>
          <Icon name="person" size={14} color="#999" />
          <MeetupOrganizer>Organizador: {meetup.User.name}</MeetupOrganizer>
        </OrganizerContainer>

        <CancelButton
          loading={loading}
          buttonId={subscription_id}
          clickedButtonId={clickedButtonId}
          onPress={onCancel}>
          Cancelar inscrição
        </CancelButton>
      </InfoContainer>
    </Container>
  );
}
