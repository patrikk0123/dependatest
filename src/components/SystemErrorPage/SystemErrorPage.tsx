import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStateVariant, Title } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

export const SystemErrorPage = () => {
  return (
    <EmptyState variant={EmptyStateVariant.xl} className="pf-u-pt-4xl">
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h1" size="4xl">
        System Error
      </Title>
      <EmptyStateBody>Unexpected error occurred, report has been sent to the server.</EmptyStateBody>

      <a href="/" className="pf-c-button pf-m-primary">
        Return to Dashboard
      </a>
    </EmptyState>
  );
};
