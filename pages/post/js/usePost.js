export function usePost() {
  const { getItem } = useEmptyCommitData();
  const id = +useRoute().params.id;
  const { data: post } = useAsyncData(
    'posts',
    async () => {
      try {
        const result = await getItem(id);
        return result;
      } catch (err) {
        console.error('Ошибка при получении данных:', err);
        return null;
      }
    },
    {
      server: true,
    }
  );
  return { post };
}
