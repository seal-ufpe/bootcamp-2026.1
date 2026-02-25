import { lazy } from 'react';
import membersData from './assets/members.json';

export const pagesMap = membersData.members
  .map((member) => ({
    [member.slug]: lazy(() =>
      import(`./pages/${member.slug}.jsx`).catch(() => {
        console.error(
          `Não foi possível encontrar o componente: ${member.slug}`,
        );
        return { default: () => <div>Página não encontrada</div> };
      }),
    ),
  }))
  .reduce((acc, curr) => ({ ...acc, ...curr }), {});
