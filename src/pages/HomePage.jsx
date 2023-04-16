import Section from 'components/Section/Section';
import { FcBusinesswoman, FcContacts, FcManager } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { Box } from 'components/Box/Box';

export const HomePage = () => {
  return (
    <Box
      height={1}
      display="flex"
      justifyContent="space-between"
      mx="auto"
      bg="list"
      borderRadius="20px"
    >
      <Section title="Welcome to Phonebook">
        <Box py={6}>
          <IconContext.Provider
            value={{
              size: '80px',
              style: { verticalAlign: 'middle', padding: '2px 5px' },
            }}
          >
            <FcBusinesswoman />
            <FcContacts />
            <FcManager />
          </IconContext.Provider>
        </Box>
      </Section>
    </Box>
  );
};
