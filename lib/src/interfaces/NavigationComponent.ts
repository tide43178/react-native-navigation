import React from 'react';
import {
  NavigationButtonPressedEvent,
  ModalDismissedEvent,
  ModalAttemptedToDismissEvent,
  SearchBarUpdatedEvent,
  SearchBarCancelPressedEvent,
  PreviewCompletedEvent,
  ScreenPoppedEvent,
} from './ComponentEvents';

export interface NavigationComponentProps {
  componentId: string;
}

export class NavigationComponent<Props = {}, State = {}, Snapshot = any>
  extends React.Component<Props & NavigationComponentProps, State, Snapshot> {
    componentDidAppear() {}
    componentDidDisappear() {}
    navigationButtonPressed(_event: NavigationButtonPressedEvent) {}
    modalDismissed(_event: ModalDismissedEvent) {}
    modalAttemptedToDismiss(_event: ModalAttemptedToDismissEvent) {}
    searchBarUpdated(_event: SearchBarUpdatedEvent) {}
    searchBarCancelPressed(_event: SearchBarCancelPressedEvent) {}
    previewCompleted(_event: PreviewCompletedEvent) {}
    screenPopped(_event: ScreenPoppedEvent) {}
  }