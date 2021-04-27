import fetcher from 'lib/fetcher';
import useSWR from 'swr';

export default function usePosts() {
    const { data, error } = useSWR(
        'https://dev.to/stories/feed/?page=1',
        fetcher
    );

    return {
        data,
        error,
    };
}
