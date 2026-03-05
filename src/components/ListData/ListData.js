import React from "react";

const tableRows = (data) => {
  return data.map((item) => (
    <tr key={item.pageid} className="border-t hov er:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium text-gray-800">{item.title}</td>

      <td
        className="px-6 py-4 text-gray-600"
        dangerouslySetInnerHTML={{ __html: item.snippet }}
      >
      </td>

      <td className="px-6 py-4">
        <a
          href={`https://en.wikipedia.org/?curid=${item.pageid}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          View
        </a>
      </td>
    </tr>
  ));
};
const ListData = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Title
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Snippet
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
            Link
          </th>
        </tr>
      </thead>

      <tbody>{tableRows(data)}</tbody>
    </table>
  );
};

export default ListData;
