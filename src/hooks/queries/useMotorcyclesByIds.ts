import { UseQueryOptions, useQueries } from 'react-query';

// export const useMotorcyclesByIds = (ids: string[]) => {
//   let users = [{ id: 1 }, { id: 2 }, { id: 3 }];

//   const fetchUserById = (
//     id: number
//   ): Promise<{ id: number; name: string }>

//   return useQueries({
//     queries: users.map((user) => {
//       return {
//         queryKey: ['user', user.id],
//         queryFn: () => fetchUserById(user.id),
//       };
//     }),
//   });

type Artist = { name: string };

const fetchArtist = (artistId: string): Artist[] => {
  return [];
};

const useArtists = (artistIds: string[]) => {
  return useQueries<Artist[]>([
    {
        queryKey: ['artists', artistId],
        queryFn: () => fetchArtist(artistId),
        staleTime: Infinity,
      };
    },
  ]);
};
