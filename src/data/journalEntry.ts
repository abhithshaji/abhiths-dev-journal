const DSASeries = {
  LC75: "Leetcode 75",
  JS30: "Leetcode JS 30",
};

const GFESeries = {
  GFE75: "GFE 75",
};

const ReadingSeries = {
  GFEBeginner: "GFE Beginner Interview Questions",
};

export const journalEntries = [
  {
    date: "23 April 2026",
    logs: [
      "Created a starter plan to start , i will be doing everyday 2 questions from Leetcode 75 and 2 questions from GFE 75.",
      "I will continue with this until its completed and then move onto next phase.",
      "I will also be creating a Journal site for showing my entire journey from start until i get into IBM.",
    ],
  },
  {
    date: "11 May 2026",
    logs: [
      {
        DSA: {
          new: [
            {
              problemNo: 2703,
              problemName: "Return Length of Arguements Passed",
              series: DSASeries.JS30,
            },
            {
              problemNo: 2629,
              problemName: "Function Composition",
              series: DSASeries.JS30,
            },
            {
              problemNo: 283,
              problemName: "Move Zeros",
              series: DSASeries.LC75,
            },
          ],
          redo: [{ problemNo: 2620, series: DSASeries.JS30 }],
        },
        GFE: {
          new: [
            {
              problemID: "todo-list",
              problemName: "Todo List",
              series: GFESeries.GFE75,
            },
            {
              problemID: "contact-form",
              problemName: "Contact Form",
              series: GFESeries.GFE75,
            },
          ],
          redo: [],
        },
        reading: [],
        mockInterview: [],
      },
    ],
    reminders: [
      {
        DSA: {
          redo: [{ problemNo: 283, series: DSASeries.LC75 }],
        },
        GFE: {
          redo: [{ problemID: "contact-form", series: GFESeries.GFE75 }],
        },
      },
    ],
    notes: [],
  },
  {
    date: "12 May 2026",
    logs: [
      {
        DSA: {
          new: [
            {
              problemNo: 392,
              problemName: "Is Subsequence",
              series: DSASeries.LC75,
            },
            {
              problemNo: 2623,
              problemName: "Memoize",
              series: DSASeries.JS30,
            },
            {
              problemNo: 2666,
              problemName: "Allow One Function Call",
              series: DSASeries.JS30,
            },
          ],
          redo: [
            { problemNo: 2704, series: DSASeries.JS30 },
            { problemNo: 1768, series: DSASeries.LC75 },
          ],
        },
        GFE: {
          new: [
            {
              problemID: "tabs",
              problemName: "Tabs",
              series: GFESeries.GFE75,
            },
            {
              problemID: "holy-grail",
              problemName: "Holy Grail",
              series: GFESeries.GFE75,
            },
          ],
          redo: [{ problemID: "debounce", series: GFESeries.GFE75 }],
        },
        reading: [],
        mockInterview: [],
      },
    ],
    reminders: [
      {
        DSA: {},
        GFE: {
          redo: [{ problemID: "debounce", series: GFESeries.GFE75 }],
        },
      },
    ],
    notes: [],
  },
  {
    date: "13 May 2026",
    logs: [
      {
        DSA: {
          new: [
            {
              problemNo: 11,
              problemName: "Container With Most Water",
              series: DSASeries.LC75,
            },
            {
              problemNo: 2723,
              problemName: "Add Two Promises",
              series: DSASeries.JS30,
            },
            {
              problemNo: 2621,
              problemName: "Sleep",
              series: DSASeries.JS30,
            },
          ],
          redo: [
            { problemNo: 1431, series: DSASeries.LC75 },
            { problemNo: 2665, series: DSASeries.JS30 },
          ],
        },
        GFE: {
          new: [],
          redo: [],
        },
        reading: [],
        mockInterview: [],
      },
    ],
    reminders: [
      {
        DSA: {
          redo: [
            { problemNo: 1431, series: DSASeries.LC75 },
            { problemNo: 2723, series: DSASeries.JS30 },
            { problemNo: 2621, series: DSASeries.JS30 },
          ],
        },
        GFE: {
          redo: [],
        },
      },
    ],
    notes: [],
  },
  {
    date: "14 May 2026",
    logs: [
      {
        DSA: {
          new: [
            {
              problemNo: 1679,
              problemName: "Max Number of K-Sum Pairs",
              series: DSASeries.LC75,
            },
            {
              problemNo: 2725,
              problemName: "Interval Cancellation",
              series: DSASeries.JS30,
            },
            {
              problemNo: 2715,
              problemName: "Timeout Cancellation",
              series: DSASeries.JS30,
            },
          ],
          redo: [
            { problemNo: 605, series: DSASeries.LC75 },
            { problemNo: 2635, series: DSASeries.JS30 },
          ],
        },
        GFE: {
          new: [],
          redo: [],
        },
        reading: [
          {
            series: ReadingSeries.GFEBeginner,
            articleNo: 1,
            noOfQuestions: 5,
          },
        ],
        mockInterview: [],
      },
    ],
    reminders: [
      {
        DSA: {
          redo: [
            { problemNo: 2715, series: DSASeries.JS30 },
            { problemNo: 2715, series: DSASeries.JS30 },
          ],
        },
        GFE: {
          redo: [],
        },
      },
    ],
    notes: [],
  },
  {
    date: "15 May 2026",
    logs: [
      {
        DSA: {
          new: [
            {
              problemNo: 643,
              problemName: "Maximum Average Subarray",
              series: DSASeries.LC75,
            },
            {
              problemNo: 2622,
              problemName: "Cache With Time Limit",
              series: DSASeries.JS30,
            },
            {
              problemNo: 2637,
              problemName: "Promise Time Limit",
              series: DSASeries.JS30,
            },
          ],
          redo: [
            { problemNo: 345, series: DSASeries.LC75 },
            { problemNo: 2634, series: DSASeries.JS30 },
          ],
        },
        GFE: {
          new: [],
          redo: [],
        },
        reading: [
          {
            series: ReadingSeries.GFEBeginner,
            articleNo: 1,
            noOfQuestions: 5,
          },
        ],
        mockInterview: [],
      },
    ],
    reminders: [
      {
        DSA: {
          redo: [
            { problemNo: 2622, series: DSASeries.JS30 },
            { problemNo: 2637, series: DSASeries.JS30 },
          ],
        },
        GFE: {
          redo: [],
        },
      },
    ],
    notes: [],
  },
];
