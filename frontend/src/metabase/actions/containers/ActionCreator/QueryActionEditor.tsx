import React from "react";

import NativeQueryEditor from "metabase/query_builder/components/NativeQueryEditor";
import { ACE_ELEMENT_ID } from "metabase/query_builder/components/NativeQueryEditor/constants";

import type NativeQuery from "metabase-lib/queries/NativeQuery";

function QueryActionEditor({
  query,
  isEditable,
  onChangeQuestionQuery,
}: {
  query: NativeQuery;
  isEditable: boolean;
  onChangeQuestionQuery: (query: NativeQuery) => void;
}) {
  return (
    <>
      <NativeQueryEditor
        query={query}
        viewHeight="full"
        setDatasetQuery={onChangeQuestionQuery}
        enableRun={false}
        hasEditingSidebar={false}
        isNativeEditorOpen
        hasParametersList={false}
        resizable={false}
        readOnly={!isEditable}
        requireWriteback
      />
    </>
  );
}

export { ACE_ELEMENT_ID };

export default QueryActionEditor;
