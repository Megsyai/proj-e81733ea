import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useCollection<T>(collectionName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    setLoading(true);
    const { data: result, error } = await supabase.from(collectionName as any).select('*');
    if (!error) setData(result as any);
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, [collectionName]);

  const insert = async (item: Partial<T>) => {
    const { data: result, error } = await supabase.from(collectionName as any).insert([item]).select();
    if (!error && result) setData(prev => [...prev, ...result as any]);
    return { data: result, error };
  };

  return { data, loading, insert, refresh };
}
