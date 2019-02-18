import { useState, useEffect } from 'react';
import FirebaseService from 'services/FirebaseService';

export const MUTATION_TYPES = {
  ADD: 'add',
};

export const useFirebaseQuery = ({
  collection,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // TODO: Add validation.

  const executeQuery = async () => {
    setLoading(true);

    try {
      const data = await  FirebaseService.getCollection(collection);

      setData(data);
    } catch(eror) {
      setError(error);
    }

    setLoading(false);
  }

  // componentDidMount
  useEffect(() => {
    executeQuery();
  }, []);

  return {
    loading,
    data,
    error,
    refetch: executeQuery,
  };
};

export const useFirebaseMutation = ({
  collection,
  name,
  type,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // TODO: Add validation

  const executeMutation = async (inputData) => {
    setLoading(true);

    const getMutation = (type) => {
      // TODO: Add support for add mutation types.
      if (type === MUTATION_TYPES.ADD) {
        return FirebaseService.addToCollection(collection, inputData);
      }

      return null;
    }

    try {
      // TODO: Handle null `getMutation`.
      const data = await getMutation(type);

      setData(data);
    } catch(error) {
      setError(error);
    }

    setLoading(false);
  }

  return {
    loading,
    data,
    error,
    [name || 'mutate']: executeMutation,
  }
}

export default {
  MUTATION_TYPES,
  useFirebaseQuery,
  useFirebaseMutation,
};
